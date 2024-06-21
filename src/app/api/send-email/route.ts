
// import { NextResponse } from 'next/server'

// export async function GET(request: Request) {
//   return NextResponse.json({ msg: 'Hello from server' })
// }
import rateLimit from '../../../server/RateLimiter'

const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raphaelherreria@gmail.com',
    pass: process.env.APP_PASSWORD
  }
})

const mailDetails = (from: string, subject: string, text: string) => {
  return {
    from: from,
    to: 'raphaelherreria@gmail.com',
    subject: subject,
    text: `${text} from: ${from}`
  }
}

const validateEmail = (email: string): boolean => {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )

  return emailRegexp.test(email)
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')

  if (authHeader != process.env.SECRET_KEY) return Response.json(
    { message: 'Unauthorized' },
    { status: 401 })

  if (await rateLimit(request, Response)) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const { email, subject, message } = await request.json()

  if (!validateEmail(email)) return Response.json(
    { message: 'Please enter a valid email.' },
    { status: 401 })

  if (email.length > 50 || email.length < 6 || subject.length < 5 || subject.length > 100 || message.length > 255) {
    return Response.json(
      { message: 'Enter a valid input.' },
      { status: 500 });
  }

  mailTransporter.sendMail(mailDetails(email, subject, message), (err: any, data: any) => {
    if (!err) {
      console.log('Error Occurs:', err)
      return Response.json(
        { message: 'Error sending email.' },
        { status: 500 })
    }
  })

  return Response.json(
    { message: 'Email sent successfully' },
    { status: 200 })
}