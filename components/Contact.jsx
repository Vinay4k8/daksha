import React from 'react'
// /media/vinay/a58c3fde-0c08-4989-9441-c3479078c8c4/home/vinay/web-projects/Nextjs/daksha/public
const Contact = () => {
  return (
    <div className='max-w-6xl md:mx-auto mx-10'>
        <div className='flex flex-col w-full justify-center items-center gap-y-10'>
            <div className='flex gap-10 w-full'>
                <div className='w-[50%] '>
                <label className='text-lg my-2' >First Name</label>
                <input  placeholder='Enter your first name' type='text' className='rounded-md py-2 px-4 text-xl border-b-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500 bg-transparent outline-none w-full'/>
                </div>
                <div className='w-[50%] '>
                <label className='text-lg ' >Last Name</label>
                <input  placeholder='Enter your first name' type='text' className='rounded-md py-2 px-4 text-xl border-b-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500 bg-transparent outline-none w-full'/>
                </div>
            </div>
            <div className='w-full'>
            <label className='text-lg ' >Email </label>
            <input  placeholder='Enter your Email' type='text' className='rounded-md py-2 px-4 text-xl border-b-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500 bg-transparent outline-none w-full'/>
            </div>
            <div className='w-full'>
            <label className='text-lg ' >Subject</label>
            <input  placeholder='subject' type='text' className='rounded-md py-2 px-4 text-xl border-b-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500 bg-transparent outline-none w-full'/>
            </div>
            <div className='w-full'>
            <label className='text-lg ' >Message</label>
            <textarea  placeholder='Enter your message' type='text' className='rounded-md py-2 px-4 text-xl border-b-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500 resize-none bg-transparent outline-none w-full' rows={5}/>
            </div>
            <div className='w-full text-left'>
                <button className='rounded-full py-2 px-4 text-xl border-[2px] border-gray-600 hover:border-purple-800 focus:border-purple-800 transition-all duration-500'>
                    send
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact