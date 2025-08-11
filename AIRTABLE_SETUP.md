# Airtable Integration Setup

## Overview
This project has been updated to use Airtable instead of Firebase for contact form submissions. The contact form will now submit data directly to your Airtable base.

## Configuration Required

### 1. Airtable Base ID
You need to provide your Airtable Base ID. To find this:

1. Go to your Airtable workspace
2. Open the base containing your contacts table
3. Look at the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
4. The Base ID is the part after `/app/` and before the next `/`

### 2. Environment Variables (Optional)
Create a `.env` file in your project root with:

```env
VITE_AIRTABLE_BASE_ID=your_base_id_here
VITE_AIRTABLE_TABLE_NAME=Contacts
```

### 3. Manual Configuration
If you prefer to configure directly in the code, update `src/airtable/config.js`:

```javascript
const AIRTABLE_BASE_ID = 'your_actual_base_id_here';
const AIRTABLE_TABLE_NAME = 'your_table_name_here';
```

## Table Structure
Your Airtable table should have these columns:
- **Name** (Single line text)
- **email** (Email)
- **company** (Single line text)
- **message** (Long text)
- **created_at** (Date)

## API Key
The API key is already configured in the code. If you need to change it, update the `AIRTABLE_API_KEY` in `src/airtable/config.js`.

## Testing
1. Start your development server: `npm run dev`
2. Open the contact form
3. Submit a test message
4. Check your Airtable base to see the new record

## Troubleshooting
- Check the browser console for any error messages
- Verify your Base ID is correct
- Ensure your API key has write permissions to the base
- Make sure the table name matches exactly (case-sensitive) 