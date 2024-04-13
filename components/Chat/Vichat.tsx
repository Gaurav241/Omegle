import React from 'react'
import Chat from './Chat';
import VideoPlayer from '@/components/VideoPlayer';

function Vichat() {
  return (
    <div className='flex-1 h-full w-full flex flex-col sm:flex-row overflow-hidden'>
        <VideoPlayer />
        <Chat />
    </div>
  )
}

export default Vichat