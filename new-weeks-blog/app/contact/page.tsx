import React from 'react'
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import ContactForm from '../components/Contact';

export default function contact() {

  return (

    <div className="divide-y divide-gray-700 dark:divide-gray-700">
      <header className="pt-6 pb-6">
        <div className="divide-y divide-gray-700 dark:divide-gray-700 space-y-1 text-center">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Contact
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-4 dark:prose-invert prose-lg">
            <ContactForm />
          </div>
        </div>
      </div>  
    </div>
  )
}  