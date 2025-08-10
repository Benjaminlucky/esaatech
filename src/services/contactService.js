import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const submitContactForm = async (formData) => {
  try {
    // Add document to 'contacts' collection
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      message: formData.message,
      timestamp: serverTimestamp(),
      status: 'new', // new, read, replied
      source: 'website_contact_form'
    });

    console.log('Contact form submitted with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

// Optional: Get contact form statistics
export const getContactStats = async () => {
  try {
    // You can add queries here to get statistics
    // For example, count of new messages, etc.
    return { success: true };
  } catch (error) {
    console.error('Error getting contact stats:', error);
    throw error;
  }
}; 