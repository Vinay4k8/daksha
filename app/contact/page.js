import Contact from '@/components/Contact'
import React from 'react'

export const metadata={
    title:"Daksha | Contact"
}


const page = () => {
  return (
    <div>
        <h1 className='my-10 tracking-[10px] uppercase text-5xl text-center'>Contact us</h1>
        <Contact/>
    </div>
  )
}

export default page