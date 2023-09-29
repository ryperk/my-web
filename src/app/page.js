"use client";
import Image from 'next/image'
import Welcome from './welcome_content.mdx';

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto py-10'>
      {/* <div className=' font-bold text-xl font-sans'>Hi, i'm Ryan</div> */}
      <Welcome/>
    </div>
  )
}
