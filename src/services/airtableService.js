import { base, AIRTABLE_TABLE_NAME } from '../airtable/config';

// Utility function to map form data to Airtable fields
const mapFormDataToAirtableFields = (formData) => {
  return {
    'A Name': formData.name,
    'email': formData.email,
    'company': formData.company || '',
    'message': formData.message,
    'created at': new Date().toISOString()
  };
};

// Function to test table access
export const testTableAccess = async () => {
  try {
    console.log('🔍 Testing table access for:', AIRTABLE_TABLE_NAME);
    
    // Try to select records from the table to see if it exists
    const records = await base(AIRTABLE_TABLE_NAME).select({
      maxRecords: 1
    }).firstPage();
    
    console.log('✅ Table access successful! Found', records.length, 'records');
    return { success: true, tableName: AIRTABLE_TABLE_NAME };
  } catch (error) {
    console.error('❌ Table access failed:', error);
    return { success: false };
  }
};

export const submitContactForm = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Name, email, and message are required fields.');
    }

    // Map form data to Airtable fields
    const fields = mapFormDataToAirtableFields(formData);

    console.log('📝 Attempting to submit to table:', AIRTABLE_TABLE_NAME);
    console.log('📋 Fields to submit:', fields);

    // Try to create record in Airtable
    const record = await base(AIRTABLE_TABLE_NAME).create([
      { fields }
    ]);

    console.log('✅ Contact form submitted to Airtable with ID:', record[0].id);
    return { success: true, id: record[0].id };
  } catch (error) {
    console.error('❌ Error submitting contact form to Airtable:', error);
    
    // Provide more specific error messages
    if (error.message.includes('AUTHENTICATION_REQUIRED')) {
      throw new Error('Authentication failed. Please check your API key.');
    } else if (error.message.includes('NOT_FOUND') || error.statusCode === 404) {
      throw new Error(`Table "${AIRTABLE_TABLE_NAME}" not found. Please check your table name.`);
    } else if (error.message.includes('INVALID_PERMISSIONS')) {
      throw new Error('Permission denied. Please check your API key permissions.');
    } else {
      throw new Error('Failed to submit contact form. Please try again.');
    }
  }
};

// Optional: Get contact form statistics
export const getContactStats = async () => {
  try {
    const records = await base(AIRTABLE_TABLE_NAME).select({
      maxRecords: 1000,
      view: 'Grid view'
    }).all();

    const stats = {
      totalContacts: records.length,
      recentContacts: records.filter(record => {
        const createdAt = new Date(record.fields.created_at);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return createdAt > thirtyDaysAgo;
      }).length
    };

    return { success: true, stats };
  } catch (error) {
    console.error('Error getting contact stats from Airtable:', error);
    throw error;
  }
};

// Optional: Get all contacts (for admin purposes)
export const getAllContacts = async () => {
  try {
    const records = await base(AIRTABLE_TABLE_NAME).select({
      maxRecords: 1000,
      view: 'Grid view',
      sort: [{ field: 'created_at', direction: 'desc' }]
    }).all();

    return records.map(record => ({
      id: record.id,
      name: record.fields.Name,
      email: record.fields.email,
      company: record.fields.company,
      message: record.fields.message,
      createdAt: record.fields.created_at
    }));
  } catch (error) {
    console.error('Error getting contacts from Airtable:', error);
    throw error;
  }
}; 