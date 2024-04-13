"use client"
import React from 'react'
import Brand from '@/components/Branding'
import Link from 'next/link'
import { useModal } from '@/hooks/use-modal-store'

function Home() {

  const { onOpen } = useModal(); 

  return (
    <div className='w-full h-full'>

      <Brand />
      <div className='text-center mt-2'>
        <p className='text-[#5f6d80] italic '>The most trustable Online Chatting Platform to help people connect <span className='font-bold'>anonymously</span> </p>
      </div>
      
    
      <div className='w-full md:w-3/4 m-auto p-2'>
        <h4 className='italic text-[##5f6d80] text-lg'>
        Omegle (oh·meg·ull) is a great way to meet new friends.
        When you use Omegle, you are paired randomly with 
        another person to talk one-on-one. If you prefer, you can 
        add your interests and you’ll be randomly paired with someone 
        who selected some of the same interests.
        </h4>

        <h4 className='italic text-[##5f6d80] text-lg'>
        To help you stay safe, chats are anonymous unless you tell someone who you are (not recommended!), 
        and you can stop a chat at any time. See our Terms of Service and Community Guidelines for more info 
        about the do’s and don’ts in using Omegle. Omegle video chat is moderated but no moderation is perfect. 
        Users are solely responsible for their behavior while using Omegle.
        </h4>

        <h4 className='italic text-[##5f6d80] text-lg'>
        YOU MUST BE 18 OR OLDER TO USE OMEGLE. See Omegle’s Terms of Service for more info. 
        Parental control protections that may assist parents are commercially available and you can find more 
        info at https://www.connectsafely.org/controls/ as well as other sites.
        </h4>
      </div>

      <div className='flex justify-center gap-5'>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"text")}
        >
          Chat Online
        </button>
        <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'
          onClick={()=>onOpen('terms',"vichat")}
        >
          Video Chat Online 
        </button>
      </div>

      <div className='flex flex-col items-center mt-4 gap-1'>
        <Link href={'/terms'} style={{textDecoration:"underline", color:"blue" }}>Terms of Use </Link>
        <Link href={'/privacy'} style={{textDecoration:"underline", color:"blue" }}>Privacy Policy</Link>
        <p className='text-sm text-gray-400'>© 2024 Omeglee.com. All rights reserved.</p>
      </div>
     </div>
  )
}

export default Home;
