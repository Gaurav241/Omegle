'use client'
import React,{useState} from 'react';
import loadingSvg from '@/public/loading.svg';
import { useCallContext } from '@/context/CallContext';
import Image from 'next/image';

function VideoPlayer() {
  const {callAccepted, myVideo,userVideo,loading, startWebCam,stopWebCam } = useCallContext();
  // const [mic, setMic] = useState(true);
  const [myVideoEnable, setMyVideoEnable] = useState(true);
  // const [userVideoEnable, setUserVideoEnable] = useState(true);

  const handleWebCam = () => {
    if (myVideoEnable) {
      stopWebCam();
    } else {
      startWebCam();
    }
    setMyVideoEnable((prev) => !prev);
  }

  return (
    <div  className="h-2/4 w-full md:h-[88vh] flex-1 p-2 flex flex-col overflow-hidden relative">

      {loading || callAccepted
       ? (
        <div 
         className={
        'absolute top-0 right-0 w-1/4 h-1/4 z-10'
      }
      >
          { myVideoEnable ? <video muted playsInline autoPlay ref={myVideo} className='max-md:h-full mx-auto' ></video> 
          : <div className='h-full w-full'>
            <Image src='/myAvatar' alt='user' width={100} height={100} />
          </div>
        }
      </div>
      ):(
        <div className= 'w-full object-cover mb-2 p-0 relative'>
          {myVideoEnable ? <video muted playsInline autoPlay ref={myVideo} className='max-md:h-full mx-auto' ></video>
          : <div className='h-full w-full'>
              <Image src='/myAvatar.jpg' alt='user' width={200} height={200} />
            </div>
          }
        </div>
      )}


      {loading && !callAccepted && 
        <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-85 flex items-center justify-center'>
          <div className='text-white text-2xl flex items-center justify-center'>
            <Image src={loadingSvg} alt='loading' width={100} height={100} />
            <p>Waiting for other to join </p>
          </div>
        </div>
      }

      {/* User Video */}
      {callAccepted && <div
        className='absolute top-0 left-0 h-full w-full'
      >
        <video playsInline autoPlay ref={userVideo} className='w-full object-fill mb-2 p-0'></video>
      </div> }

    </div>

  )};

export default VideoPlayer; 
