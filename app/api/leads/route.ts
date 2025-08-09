import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('=== GOOGLE SCRIPTS API ROUTE CALLED ===');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { name, email, company, businessType, staffCount, industry, frustration, timeline, fieldLabel, fieldValue, source } = body;

    // Validate required fields
    if (!name || !email || !company || !businessType || !staffCount || !industry || !frustration || !timeline) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the lead for tracking
    console.log('New lead received:', {
      name,
      email,
      company,
      businessType,
      staffCount,
      industry,
      frustration,
      timeline,
      fieldLabel,
      fieldValue,
      source,
      timestamp: new Date().toISOString()
    });

    // Send to Google Scripts
    const googleScriptsUrl = 'https://script.google.com/macros/s/AKfycbzh3eaKbf1yJ5n55qxMszWKier_ipf7hN3V6hPdTcJqfbgWvnfvYgLV3QHXu_NLDIUJ/exec';
    
    const response = await fetch(googleScriptsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        businessType,
        staffCount,
        industry,
        frustration,
        timeline,
        fieldLabel,
        fieldValue,
        source
      })
    });

    if (response.ok) {
      console.log('Google Scripts email sent successfully');
      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    } else {
      console.error('Google Scripts failed:', response.status);
      return NextResponse.json(
        { error: 'Email sending failed' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 