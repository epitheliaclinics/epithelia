import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    email,
    mobile,
    interest,
    notes = '',
    company_website = '',
  } = body;

  if (company_website && company_website.trim() !== '') {
    console.warn('Bot submission detected — ignored.');
    return Response.json({ success: true });
  }

  try {
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
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error('Email Error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
