import Airtable from 'airtable';

// Airtable configuration
const AIRTABLE_API_KEY = 'patRDg5Mk5obcU3OQ.4eb7b2d0d0a0e3bfeec463f1eb5328ea7e80e0aec4e661588833027d40f4f157';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || '55BncFtmet9u1f';
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'contact list'; // Exact name from interface

// Validate configuration
if (!AIRTABLE_BASE_ID || AIRTABLE_BASE_ID === 'YOUR_BASE_ID') {
  console.warn('⚠️  Airtable Base ID not configured. Please set VITE_AIRTABLE_BASE_ID in your environment variables or update the config file.');
}

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export { base, AIRTABLE_TABLE_NAME, AIRTABLE_BASE_ID }; 