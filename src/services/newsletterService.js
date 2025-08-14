import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const subscribeToNewsletter = async (email) => {
  try {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    const docRef = await addDoc(collection(db, 'newsletter-subscriptions'), {
      email: email.toLowerCase().trim(),
      timestamp: serverTimestamp(),
      status: 'active',
      source: 'website_footer',
      preferences: {
        cybersecurity: true,
        ai_trends: true,
        tech_insights: true
      },
      metadata: {
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }
    });

    console.log('Newsletter subscription created with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw new Error(error.message || 'Failed to subscribe to newsletter. Please try again.');
  }
};

export const checkExistingSubscription = async (email) => {
  try {
    // Note: This would require a composite index in Firestore
    // For now, we'll just attempt to subscribe and handle duplicates in Cloud Function
    return { exists: false };
  } catch (error) {
    console.error('Error checking existing subscription:', error);
    return { exists: false };
  }
};
