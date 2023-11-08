import React from 'react'


function Hero() {
  return (
    <div className='flex flex-col h-screen w-screen opacity-70 md:opacity-90'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 object-cover h-screen w-screen'
        >
            <source src='/blackhole.webm' type='video/webm'></source>
        </video>
    </div>
  )
}

export default Hero