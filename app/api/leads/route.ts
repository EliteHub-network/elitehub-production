import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Present' : 'Missing');
console.log('API Key starts with SG:', process.env.SENDGRID_API_KEY?.startsWith('SG.'));
sgMail.setApiKey('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');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, businessType, staffCount, fieldLabel, fieldValue, source } = body;

    // Validate required fields
    if (!name || !email || !company || !businessType || !staffCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification email to business
    await sendNotificationEmail(name, email, company, businessType, staffCount, fieldLabel, fieldValue);

    // Send welcome email to client
    await sendWelcomeEmail(name, email, company, businessType, staffCount, fieldLabel, fieldValue);

    // Log the lead for tracking
    console.log('New lead received:', {
      name,
      email,
      company,
      businessType,
      staffCount,
      fieldLabel,
      fieldValue,
      source,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Lead submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendNotificationEmail(name: string, email: string, company: string, businessType: string, staffCount: string, fieldLabel: string, fieldValue: string) {
  try {
    const businessTypeLabel = {
      'solo': 'Solo Entrepreneur (No Staff)',
      'small-team': 'Small Team (1-5 Staff)',
      'growing': 'Growing Business (5+ Staff)'
    }[businessType] || businessType;

                   const msg = {
        to: 'matthewbetts1996@hotmail.co.uk',
        from: 'noreply@em7566.elitehubnetwork.com', // Using your verified domain
      subject: `New Lead: ${name} from ${company}`,
      text: `
New Lead Received:

Name: ${name}
Email: ${email}
Company: ${company}
Business Type: ${businessTypeLabel}
${fieldLabel}: ${fieldValue}
Source: Freedom Analysis Form
Timestamp: ${new Date().toLocaleString()}

Book Strategy Call: https://cal.com/elitehubnetwork/book-strategy-call

Action Required:
- Send personalized welcome email within 24 hours
- Prepare custom analysis based on business type and ${fieldLabel.toLowerCase()}
- Follow up with strategy call booking
      `,
      html: `
<h2>New Lead Received</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Business Type:</strong> ${businessTypeLabel}</p>
<p><strong>${fieldLabel}:</strong> ${fieldValue}</p>
<p><strong>Source:</strong> Freedom Analysis Form</p>
<p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
<br>
<p><a href="https://cal.com/elitehubnetwork/book-strategy-call">Book Strategy Call</a></p>
<br>
<h3>Action Required:</h3>
<ul>
<li>Send personalized welcome email within 24 hours</li>
<li>Prepare custom analysis based on business type and ${fieldLabel.toLowerCase()}</li>
<li>Follow up with strategy call booking</li>
</ul>
      `
    };

    await sgMail.send(msg);
    console.log('Notification email sent successfully');

  } catch (error) {
    console.error('Error sending notification email:', error);
    throw error;
  }
}

async function sendWelcomeEmail(name: string, email: string, company: string, businessType: string, staffCount: string, fieldLabel: string, fieldValue: string) {
  try {
    const businessTypeLabel = {
      'solo': 'Solo Entrepreneur',
      'small-team': 'Small Team',
      'growing': 'Growing Business'
    }[businessType] || businessType;

                   const msg = {
        to: email,
        from: 'noreply@em7566.elitehubnetwork.com', // Using your verified domain
      subject: 'Thank you for your Freedom Analysis request',
      text: `
Hi ${name},

Thank you for requesting your custom Freedom Analysis from EliteHub Network.

We've received your details:
- Company: ${company}
- Business Type: ${businessTypeLabel}
- ${fieldLabel}: ${fieldValue}

Our team will analyze your specific situation and prepare a personalized report showing how much time and money you're currently wasting on admin tasks.

You'll receive your custom Freedom Analysis within 24 hours.

In the meantime, why not book your free strategy call to discuss your results?
https://cal.com/elitehubnetwork/book-strategy-call

Best regards,
The EliteHub Network Team
      `,
      html: `
<h2>Thank you for your Freedom Analysis request</h2>
<p>Hi ${name},</p>
<p>Thank you for requesting your custom Freedom Analysis from EliteHub Network.</p>
<p>We've received your details:</p>
<ul>
<li><strong>Company:</strong> ${company}</li>
<li><strong>Business Type:</strong> ${businessTypeLabel}</li>
<li><strong>${fieldLabel}:</strong> ${fieldValue}</li>
</ul>
<p>Our team will analyze your specific situation and prepare a personalized report showing how much time and money you're currently wasting on admin tasks.</p>
<p><strong>You'll receive your custom Freedom Analysis within 24 hours.</strong></p>
<p>In the meantime, why not book your free strategy call to discuss your results?</p>
<p><a href="https://cal.com/elitehubnetwork/book-strategy-call">Book Your Free Strategy Call</a></p>
<br>
<p>Best regards,<br>The EliteHub Network Team</p>
      `
    };

    await sgMail.send(msg);
    console.log('Welcome email sent successfully');

  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
} 