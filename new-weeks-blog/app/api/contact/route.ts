// import { NextResponse, NextRequest } from 'next/server'

// const nodemailer = require('nodemailer');
// require('dotenv').config()

// export async function POST(request) {
//     const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
//     const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
//     const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
//     const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
//     const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
//     const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
//     const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

//     console.log("dealing with request")
//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     const message = formData.get('message')

//     console.log(formData)

//     // create transporter object
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         tls: {
//             ciphers: "SSLv3",
//             rejectUnauthorized: false,
//         },
//         auth: {
//             host: 'OAuth2',
//             clientId: clientId,
//             clientSecret: clientSecret,
//             accessToken: accessToken,
//             refreshToken: refreshToken,
//             user: username,
//             pass: password
//         }
//     });
    
//     try {
//         const mailOptions = await transporter.sendMail({
//             from: username,
//             to: myEmail,
//             replyTo: email,
//             subject: `Website activity from ${email}`,
//             html: `
//             <p>Name: ${name} </p>
//             <p>Email: ${email} </p>
//             <p>Message: ${message} </p>
//             `,
//         })
//             console.log(mailOptions)
//         return NextResponse.json({mailOptions, message: "Success: email was sent" })
        

//     } catch (error) {
//         console.log(error)
//         NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
//     }


// }
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

require('dotenv').config()

const sgMail = require('@sendgrid/mail')

const {NEXT_PUBLIC_SENDGRID_API_KEY, NEXT_PUBLIC_FROM_EMAIL, NEXT_PUBLIC_TO_EMAIL} = process.env
sgMail.setApiKey(NEXT_PUBLIC_SENDGRID_API_KEY)
 
export async function POST( req: NextApiRequest, res: NextApiResponse ) {
    // const handler = NextAuth({
    const {name, email, message} = req.body
    console.log(req.body.name)

    const msg = {
        to: NEXT_PUBLIC_TO_EMAIL,
        from: NEXT_PUBLIC_FROM_EMAIL,
        subject: `Website activity from ${NEXT_PUBLIC_FROM_EMAIL}`,
        html: `<p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
        `
    }
    console.log(msg)
    await sgMail.send
    return NextResponse.json({ success: true })
    }

