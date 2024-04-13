import React from 'react'

import TextChatBox from './TextChatBox'

function TextChat() {
  return (
    <div className='h-[calc(100vh-60px)] w-full flex flex-row '>
        <TextChatBox />
    </div>
  )
}

export default TextChat