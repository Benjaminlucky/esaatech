/*
 Cloud Functions for Firebase - Contact to Slack bridge
 Trigger: Firestore onCreate for `contacts/{docId}`
 Posts submissions to Slack via Incoming Webhook.
*/

const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { defineSecret } = require('firebase-functions/params');
const { logger } = require('firebase-functions');

initializeApp();
const db = getFirestore();

// Secret: set via `firebase functions:secrets:set SLACK_WEBHOOK_URL`
const SLACK_WEBHOOK_URL = defineSecret('SLACK_WEBHOOK_URL');

exports.onContactCreated = onDocumentCreated(
  {
    document: 'contacts/{docId}',
    region: 'us-central1',
    secrets: [SLACK_WEBHOOK_URL],
    retry: true,
  },
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const contactId = snap.id;
    const data = snap.data();

    // Idempotency guard
    if (data?.delivery?.deliveredAt) {
      logger.info('Already delivered, skipping', { contactId });
      return;
    }

    const name = data?.name || 'Unknown';
    const email = data?.email || 'No email';
    const company = data?.company || '—';
    const message = (data?.message || '').toString().slice(0, 3000);

    const payload = {
      text: `New contact form submission from ${name}`,
      blocks: [
        { type: 'header', text: { type: 'plain_text', text: 'New Contact Submission' } },
        { type: 'section', fields: [
          { type: 'mrkdwn', text: `*Name*\n${name}` },
          { type: 'mrkdwn', text: `*Email*\n${email}` },
          { type: 'mrkdwn', text: `*Company*\n${company}` },
        ]},
        { type: 'section', text: { type: 'mrkdwn', text: `*Message*\n${message}` } },
        { type: 'context', elements: [ { type: 'mrkdwn', text: `Doc ID: ${contactId}` } ] },
      ],
    };

    try {
      const resp = await fetch(SLACK_WEBHOOK_URL.value(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const text = await resp.text();
      if (!resp.ok) {
        throw new Error(`Slack webhook failed (${resp.status}): ${text}`);
      }

      await db.doc(`contacts/${contactId}`).set({
        status: 'delivered',
        delivery: { deliveredAt: new Date().toISOString() },
      }, { merge: true });

      logger.info('Slack delivered', { contactId });
    } catch (err) {
      logger.error('Slack error', { error: String(err), contactId });
      await db.doc(`contacts/${contactId}`).set({
        status: 'failed',
        delivery: {
          attempts: (data?.delivery?.attempts || 0) + 1,
          lastAttemptAt: new Date().toISOString(),
          error: String(err?.message || err),
        },
      }, { merge: true });
      throw err; // allow retry
    }
  }
);


