import { type NextRequest, NextResponse } from "next/server"
import { nanoid } from "nanoid"
import nodemailer from "nodemailer"

// Email templates
const getUserEmailTemplate = (name: string, leadId: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You - Luminous Dental LV</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <div style="background: white; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
            <span style="color: #2563eb; font-size: 24px; font-weight: bold;">L</span>
        </div>
        <h1 style="color: white; margin: 0; font-size: 28px;">Luminous Dental LV</h1>
        <p style="color: #e0e7ff; margin: 10px 0 0 0;">Dental Implants Specialists</p>
    </div>
    
    <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You, ${name}!</h2>
        
        <p>We've received your consultation request and we're excited to help you restore your smile with dental implants.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin: 0 0 10px 0; color: #1e40af;">Your Reference ID: <strong>${leadId}</strong></h3>
            <p style="margin: 0; color: #64748b;">Please keep this ID for your records.</p>
        </div>
        
        <h3 style="color: #374151; margin-top: 30px;">What happens next?</h3>
        <ul style="color: #6b7280; padding-left: 20px;">
            <li>Our team will review your information within 24 hours</li>
            <li>We'll call you to schedule your free consultation</li>
            <li>During your visit, we'll create a personalized treatment plan</li>
            <li>You'll receive a detailed cost estimate with financing options</li>
        </ul>
        
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
            <h3 style="color: #059669; margin: 0 0 10px 0;">Questions? Contact Us!</h3>
            <p style="margin: 0; color: #047857;">
                📞 <strong>(725) 291-5588</strong><br>
                📧 <strong>info@luminousdentallv.com</strong><br>
                📍 <strong>1212 S Maryland Pkwy, Las Vegas, NV 89104</strong>
            </p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Thank you for choosing Luminous Dental LV for your dental implant needs. We look forward to helping you achieve the smile you deserve!
        </p>
    </div>
</body>
</html>
`

const getAdminEmailTemplate = (formData: any, leadId: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Lead - Luminous Dental LV</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: #1f2937; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🦷 New Dental Implant Lead</h1>
        <p style="color: #9ca3af; margin: 10px 0 0 0;">Luminous Dental LV</p>
    </div>
    
    <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
            <h2 style="color: #92400e; margin: 0;">Lead ID: ${leadId}</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${formData.name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${formData.email}</td>
            </tr>
            <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${formData.phone}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Preferred Date</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${formData.preferredDate || "Not specified"}</td>
            </tr>
            <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${formData.message || "No additional message"}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Submitted</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${new Date().toLocaleString()}</td>
            </tr>
        </table>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">⚡ Action Required</h3>
            <p style="margin: 0; color: #1e3a8a;">Please follow up with this lead within 24 hours for best conversion rates.</p>
        </div>
    </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Generate unique lead ID
    const leadId = `LUM-${nanoid(8).toUpperCase()}`

    // Create transporter (you'll need to configure with your SMTP settings)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Luminous Dental LV" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: "Thank You for Your Dental Implant Consultation Request",
      html: getUserEmailTemplate(formData.name, leadId),
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: `"Luminous Dental LV" <${process.env.SMTP_USER}>`,
      to: "info@luminousdentallv.com",
      subject: `New Dental Implant Lead - ${leadId}`,
      html: getAdminEmailTemplate(formData, leadId),
    })

    return NextResponse.json({
      success: true,
      leadId,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
