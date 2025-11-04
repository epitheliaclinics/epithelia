import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface FormSubmission {
  name: string;
  email: string;
  mobile: string;
  interest?: string;
  notes?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_keywords?: string;
  form_name?: string;
  company_website?: string;
}

export async function POST(request: Request) {
  const body: FormSubmission = await request.json();
  const {
    name,
    email,
    mobile,
    interest = '',
    notes = '',
    utm_source = '',
    utm_medium = '',
    utm_campaign = '',
    utm_keywords = '',
    form_name = 'Contact Form',
    company_website = '',
  } = body;

  if (company_website && company_website.trim() !== '') {
    console.warn('Bot submission detected — ignored.');
    return Response.json({ success: true });
  }

  try {
    // 1. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_FROM,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Inquiry" <${process.env.GMAIL_FROM}>`,
      to: process.env.GMAIL_TO,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h3>New Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        <p><strong>Form:</strong> ${form_name}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    // 2. Save to Google Sheets
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
    ) {
      try {
        const auth = new google.auth.JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const existingData = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:A',
        });

        const rowCount = existingData.data.values?.length || 1;
        const nextSlNo = rowCount;

        const rowData = [
          nextSlNo,
          new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name,
          mobile,
          email,
          form_name,
          utm_campaign,
          utm_source,
          utm_medium,
          utm_keywords,
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:J',
          valueInputOption: 'RAW',
          requestBody: {
            values: [rowData],
          },
        });

        console.log('Data saved to Google Sheets successfully');
      } catch (sheetsError) {
        console.error('Google Sheets Error (non-critical):', sheetsError);
      }
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email Error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
