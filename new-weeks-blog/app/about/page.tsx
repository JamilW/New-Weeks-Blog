import React from 'react'
import { PortableText } from '@portabletext/react';
import Image from "next/image";

export default function about() {

  return (

    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <img
              src="https://i.postimg.cc/1R2DN2k5/10995827-10202518527803409-4429824122052753281-n-1.jpg"
              width={800}
              height={400}
              alt=''
              className='rounded-full aspect-square object-cover'
            />
            <p>
              Welcome to everyone who has found their way to my blog website. As a kid growing up in a small town, the way I escaped my mundane surroundings was through film and music. My love for cinema and hip-hop culture has been very important to me in life. I would immerse myself in watching a captivating movie or by listening to a song or album that grabbed my eardrums. On my life&apos;s journey, I would form bonds with people who shared my enthusiasm in the entertainment arts. This love for the arts would shape me into the man I am today in terms of fashion, slang, and the company I keep.
              
            </p>  
            <p>
              As someone who also enjoys writing, it made sense to create a blog that would be a haven for like-minded individuals who share this love for movies and film. The Weeks Agenda is for the cinephiles and hip-hop enthusiasts of the world, as well as for the casual fans. I want to build a community where we can respectfully exchange discourse over our love/hate for the latest movies and music. This blog is for the people who still enjoy the experience of going to a movie opening night with a tub of buttered popcorn and soft drink to wash it down. For the people who grew up on Yo! MTV Raps and Rap City. For the people who lose their minds over the latest movie trailers. For the people who debate top 10 rappers/albums lists.   
            </p>
            <p>
              Rather it&apos;s film or hip-hop culture, Weeks Agenda is your one-stop shop for entertainment where I offer my personal spin on all things pop culture.  Let&apos;s connect, politic ditto...
            </p>  
          </div>
        </div>
      </div>  

      {/* <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
        <img
          src="/app/assets/headshot.jpg"
          width={800}
          height={400}
          />
        ddfdfdfdfdfd
      </div> */}
    </div>
  )
}
