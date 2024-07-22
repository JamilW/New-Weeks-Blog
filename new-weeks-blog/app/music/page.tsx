// "use client"
import React from 'react'
import { client } from "../lib/sanity"
import { Post } from "../lib/interface"
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import Image from "next/image"; 

async function getData() {
  // const today = new Date().toISOString().split('T')[0];
  const query = `*[_type == 'post' && _createdAt < '2024-04-01' && overview match "music"] | order(_createdAt desc)`;

  const data = await client.fetch(query);
  
console.log(data)


  return data;
}

export const revalidate = 60

export default async function movies() {
  const data = (await getData()) as Post[];
  
  return (
    
    <div className="divide-y divide-gray-700 dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Music Blog Archives
            </h1>
          </div>
        </div>
      </header>

      <img
          src="https://i.postimg.cc/cJyYwMxg/IMG-7640.jpg"
          alt=""
          className="rounded-lg mt-8 pt-10 object-cover"
          width={800}
          height={800}
        />

      <div className="divide-y divide-gray-200 dark:divide-gray-700 pt-6 justify-between display-inline block">
        {/* <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg"> */}
            <ul>
              {data.map((post) => (
                <li key={post._id} className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div>
                      <p className="text-base font-medium leading-6 text-teal-500">
                        {new Date(post._createdAt).toISOString().split('T')[0]}
                        {/* Date(post._createdAt).toISOString().split('T')[0] */}
                      </p>
                    </div>
                      <Link 
                        href={`/post/${post.slug.current}`} 
                        prefetch 
                        className="space-y-3 xl:col-span-3"
                      >
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray 900 dark:text-gray-100">
                        {post.title}  
                      </h3>
                    </div>

                      <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.overview}
                      </p>
                      </Link>
                  </article>
                </li>
              ) 
            )}
            {/* <div className='flex flex-col items-center'>
              <Link href='/' > 
                <button className='p-6 bg-teal-500 rounded-lg border-solid border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white text-center'>
                  2024-2023 Music Blog Archives
                </button>
              </Link>
            </div> */}
            </ul>

          {/* </div>
        </div> */}
      </div>  
    </div>
  )
}