# EmailJS Setup Guide

To enable the contact form to send emails to your Gmail account, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (manavshah052003@gmail.com)
5. Note down the Service ID (e.g., "service_xxxxxxx")

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template ID**: `template_contact`

**Subject**: New Message from Portfolio Contact Form

**Content**:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

## 5. Update Contact Component
1. Open `src/components/Contact.js`
2. Replace these values with your actual EmailJS credentials:

```javascript
const serviceId = 'service_etgcyb7'; // Replace with your service ID
const templateId = 'template_9jq8qc6'; // Your template ID
const publicKey = 'UOuEw403z_57zXbXd'; // Replace with your public key
```

## 6. Test the Form
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the message

## Alternative: Simple Form Submission
If you prefer not to use EmailJS, you can also:
1. Use a service like Formspree, Netlify Forms, or Getform
2. Or simply display a message asking users to email you directly

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Gmail integration

This should be sufficient for a personal portfolio website.
