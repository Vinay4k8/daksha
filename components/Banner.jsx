import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='h-[400px] mt-16 relative flex items-center justify-center'>
        <div className='h-full w-full'>
            <Image src={"/banner.webp"} fill/>
        </div>
        <div className='flex flex-col h-full justify-center items-center gap-y-10 absolute' >
            <h1 className='text-6xl flex flex-col gap-y-5 tracking-[10px] font-semibold'>
            Welcome to 
            <span className='text-purple-800'>Daksha 3.0</span>
            </h1>
            <h3 className='font-light text-4xl'>
            Annual National Level <span className='block mt-6'>Techno Cultural Fest</span>
            </h3>
        </div>
    </div>
  )
}

export default Banner