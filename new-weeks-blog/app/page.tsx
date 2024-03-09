import { client } from "./lib/sanity"; 
import { Post } from "./lib/interface";
import Link from "next/link";
import RootLayout from "./layout";
// import { Redis } from '@upstash/redis';
// import styles from './page.module.css';

async function getData() {
  const query = `*[_type == 'post'] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60

export default async function IndexPage() {
  RootLayout
  const data = (await getData()) as Post[];
  return    (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 pt-6">
      <div className="space-y-2 md:space-y-5 pb-8">
         <ul className="md:flex gap-x-44 sm: flex items-center"> 
          <li>
            <h2 className="text-3xl  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              All Posts
            </h2>
          </li>
          <li>
            <Link className=" display-inline block float-right" href="/about">
              <div className="space-y-2 md:space-y-5">
                <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  About Me
                </h2>
              </div>
            </ Link>
          </li>
        </ul>
      </div>

      <ul>
      {data.map((post) => (
        <li key={post._id} className="py-4">
          <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {new Date(post._createdAt).toISOString().split('T')[0]}
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
      ) )}
      </ul>
    </div>
  )

}

