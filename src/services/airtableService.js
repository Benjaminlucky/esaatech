const AIRTABLE_WEBHOOK_URL = import.meta.env.VITE_AIRTABLE_WEBHOOK_URL;
const CONTACT_WEBHOOK_TOKEN = import.meta.env.VITE_CONTACT_WEBHOOK_TOKEN || undefined;

// Function to test webhook availability (lightweight validation)
export const testTableAccess = async () => {
  try {
    if (!AIRTABLE_WEBHOOK_URL) {
      console.error('❌ Webhook URL missing. Set VITE_AIRTABLE_WEBHOOK_URL');
      return { success: false };
    }
    // Do not actually POST to avoid creating noise. Just return presence.
    console.log('✅ Webhook URL detected. Ready to submit.');
    return { success: true, webhook: true };
  } catch (error) {
    console.error('❌ Webhook validation failed:', error);
    return { success: false };
  }
};

// Submit contact form via Airtable Automation Webhook
export const submitContactForm = async (formData) => {
  // Validate required fields
  if (!formData?.name || !formData?.email || !formData?.message) {
    throw new Error('Name, email, and message are required fields.');
  }
  if (!AIRTABLE_WEBHOOK_URL) {
    throw new Error('Airtable webhook URL is not configured.');
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    company: formData.company || '',
    message: formData.message,
    submittedAt: new Date().toISOString(),
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    token: CONTACT_WEBHOOK_TOKEN || undefined,
  };

  try {
    const response = await fetch(AIRTABLE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`Webhook call failed: ${response.status} ${text}`);
    }

    return { success: true };
  } catch (error) {
    console.error('❌ Error submitting contact form via webhook:', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

// Optional: The following helpers are no-ops in webhook mode, but kept for API compatibility
export const getContactStats = async () => {
  console.warn('getContactStats is not available in webhook mode.');
  return { success: true, stats: { totalContacts: 0, recentContacts: 0 } };
};

export const getAllContacts = async () => {
  console.warn('getAllContacts is not available in webhook mode.');
  return [];
}; 