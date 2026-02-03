import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import Contact from '@/models/Contact'
import { sendEmail } from '@/lib/mailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Connect to database
    await dbConnect()

    // Save contact to database
    const contact = await Contact.create({
      name,
      email,
      company,
      message,
    })

    // Send email notification
    await sendEmail({
      to: process.env.MAIL_TO || '',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'N/A'}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    })

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
