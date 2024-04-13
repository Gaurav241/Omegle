import React from 'react'
import Vichat from '@/components/Chat/Vichat'
import { CallContextProvider } from '@/context/CallContext'
import Header from '@/components/Header/HeaderViChat'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ViChat - Omeglee',
  description: 'free video calling | talk with stranger | video call | random call',
}


function Chatting() {

  return (
    <div className='flex flex-col'>
        <CallContextProvider>
        <Header />
        <div className='h-[calc(100vh-60px)] w-full flex flex-col md:flex-row flex-wrap'>
            <Vichat />
        </div>
        </CallContextProvider>
    </div>
  )
}

export default Chatting;