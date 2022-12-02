const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun.client({
    username: 'api',
    key: API_KEY,
  })

  const now = new Date()

  const customerEmail = {
    from: `VBNC Physical Therapy <${process.env.MAIL_FROM}>`,
    to: body.email,
    subject: 'Contact request received',
    html: `
      <h1>Your contact request has been received!</h1>
      <p>Thank you for choosing VBNC Physical Therapy! Our team will be in touch with you soon.</p> 
    `
  }


  const staffEmail = {
    from: `VBNC Physical Therapy <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Contact request received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <p>Name: ${body.name}</p>
        <p>Treatment Type: ${body.treatment}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Questions/Comments: ${body.comments}</p>
      `
  }

  await mg.messages.create(DOMAIN, staffEmail)
  .then(async response => {
    if (response.status === 200) {
      await mg.messages.create(DOMAIN, customerEmail)
      .then(response => {
        if (response.status === 200) {
          res.status(200).json({ success: true })
        } else {
          res.status(500).json({ error_message: 'client mail gun error', status: response.status, })
        }
      })
    } else {
      res.status(500).json({ error_message: 'mail gun error', status: response.status, })
    }
  })
}
