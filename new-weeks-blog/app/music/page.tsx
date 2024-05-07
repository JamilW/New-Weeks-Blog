"use client"
import React from 'react'
import { PortableText } from '@portabletext/react';
import Image from "next/image";

export default function music() {

  return (

    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Music
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <p>
              MUSIC BLOG ARCHIVE COMING SOON...
            </p>
            <img
              src="https://i.postimg.cc/bYBGXWLS/s-l1200.webp"
              width={800}
              height={400}
              alt=''
            />  
          </div>
        </div>
      </div>  
    </div>
  )
}
