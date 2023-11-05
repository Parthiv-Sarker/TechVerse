import React from 'react'


function Hero() {
  return (
    <div className='flex flex-col w-screen h-screen'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 object-cover w-screen h-screen'
        >
            <source src='/blackhole.webm' type='video/webm'></source>
        </video>
    </div>
  )
}

export default Hero