"use client"
// import React, { useState } from 'react'
// import { NextRequest, NextResponse } from 'next/server'

// function ContactForm() {
// 	const [loading, setLoading] = useState(false)
// 	const [successMessage, setSuccessMessage] = useState('')

// 	const onSubmit = async (e: React.FormEvent) => {
// 		// Prevent the form from submitting the traditional way
// 		e.preventDefault()

// 		// Don't submit twice
// 		if (loading) {
// 			return
// 		}

// 		// 👇 A nice little trick to get all the form values as an object
// 		const form = e.target as HTMLFormElement
// 		const formValues = Object.fromEntries(new FormData(form).entries())

// 		setLoading(true)
// 		setSuccessMessage('')

// 		try {
// 			await fetch('/api/contact', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(formValues),
// 			}).then((response) => {
// 				if (!response.ok) {
// 					throw new Error(`HTTP error! Status: ${response.status}`)
// 				}
// 				return response.json()
// 			})

// 			setLoading(false)
// 			setSuccessMessage('Thank you for contacting us!')

// 			// Reset the form values after a successful submission
// 			form.reset()
// 		} catch (err) {
// 			console.error(err)
// 			alert('An error occurred while sending your message...')
// 			setLoading(false)
// 		}
// 	}
// import Link from "next/link";
// // import sendEmail from "../api/contact/route";

// export default async ContactForm(req, res)    {
//     const { email } = req.body;

//     async function handleSubmit(event) {

//         event.preventDefault();
//         const formData = new FormData(event.target);
//         try [
//             const response = await fetch('/api/contact', {
//                 method: 'post',
//                 body: formData,
//             });
//         ]
// }

import { useState } from "react";

export default function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const {name, email, message} = values;
    console.log(values.name)

    const handleChange = (e)    => 
        setValues({ ...values, [e.target.name]: e.target.value });

        const handleSubmit = async (e) => {
            e.preventDefault();
//         // const formData = new FormData(event.target)
        try {
//             // const apiUrl = process.env.NEXT_PUBLIC_API_KEY
//             // const res = await fetch('$(apiUrl)/api/contact', {
            const res = await fetch('weeksagenda.com/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
                mode: 'no-cors',
                
            })

//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! Status: ${res.status}`)
//                 }
                    
//                     // 			})// body: formData,
//             })
//                 // 				if (!response.ok) {
//                 // 					throw new Error(`HTTP error! Status: ${response.status}`)
//                 // 				}
//                 // 				return response.json()
            const { err } = await res.json();
            if (err)  {
                console.log(err)
                return 
            }
//             // // // if (!response.ok) {
//             // // //     console.log("falling over")
//             // // //     throw new Error(`response status: ${response.status}`);
//             // // // }
//             // // // const responseData = await response.json();
//             // // // console.log(responseData['message'])
    
        } catch (err) {
            
        console.log(values)
            alert("Error, please try resubmitting the form");
        }      
    };

	return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
                    <p>
                        For any general questions or inquiries, feel free to fill out and submit the following form to reach out to us. We are building a community here from the ground up and would love your feedback. Please be respectful in your discourse. I will respond by e-mail (weeksagenda@gmail.com) as soon as possible. Let's connect!
                    </p>    
                </div>
            </div>
        </div>
                <form method="post" onSubmit={handleSubmit} action="/api/contact"  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 dark:text-white">
                    <div className="mb-4 flex flex-col w-500">

                        <label htmlFor="form-name">Name </label>
                        <input id="form-name" value={name} onChange={handleChange} required placeholder="Enter your full name" className='mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black' autoComplete="name" maxLength={50} name="name"  type="text"/>

                        <label htmlFor="form-email"> Email:</label>
                        <input id="form-email" value={email} onChange={handleChange} required placeholder="Enter your email" className='mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black' autoComplete="email" maxLength={80} name="email" type="email" />
                        
                        <label htmlFor="form-message"> Message: </label>
                        <textarea id="form-message" value={message} onChange={handleChange} required placeholder="Enter your message" className='mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black' name="message"   rows={5} />

                    </div>
                    <button className="mt-4 border-solid border-2 border-gray-900 dark:border-white rounded-md bg-teal-500 p-4 text-black dark:text-white" type="submit">Let's Connect, Politic, Ditto!</button>
                </form>
            </main>
    )
    };

        
// return (
// 		<form onSubmit={handleSubmit}>
// 			<label>
// 				<span>Name</span>
// 				<input type="text" name="name" required placeholder="Full Name" className='border-solid border-2 border-gray-900 rounded-md p-2 ml-11' />
// 			</label>
// 			<br></br>
// 			<br></br>
// 			<label>
// 				<span>Email</span>
// 				<input type="email" name="email" placeholder="Email" required className='border-solid border-2 border-gray-900 rounded-md p-2 ml-12' />
// 			</label>
// 			<br></br>
// 			<br></br>
// 			<label>
// 				<span>Subject</span>
// 				<input type="text" placeholder="Subject" name="name" required className='border-solid border-2 border-gray-900 rounded-md p-2 ml-7' />
// 			</label>
// 			<br></br>
// 			<br></br>
// 			<label>
// 				<span>Message</span>
// 				<textarea name="message" required placeholder="Message" className='border-solid border-2 border-gray-900 rounded-md p-2 ml-4'/>
// 			</label>
// 			<br></br>
// 			<br></br>
// 			<button disabled={loading} className='border-solid border-2 border-gray-900 rounded-md bg-teal-500 p-4 text-black' type="submit" >
// 				Let's Connect, Politic, Ditto!
// 			</button>
// 			{successMessage && <p>{successMessage}</p>}
// 		</form>
// 	)
	
// }

// export default 
        