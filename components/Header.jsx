"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const NavLinks=[
    {name:"home",path:"/"},
    {name:"about",path:"/about"},
    {name:"events",path:"/events"},
    {name:"team",path:"/team"},
    {name:"transport",path:"/transport"},
    {name:"sponsers",path:"/sponsers"},
    {name:"gallery",path:"/gallery"},
    {name:"contact",path:"/contact"},
]



const Header = () => {
    const pathName=usePathname();

    console.log(pathName)
  return (
    <div className='bg-black z-50 sticky top-0 right-0 left-0 text-white shadow-2xl shadow-white/10 px-4 py-4 rounded-md'>
        <div className='flex flex-col justify-center items-center w-full gap-y-5 mt-3'>
        <div className='flex justify-center w-full'>
            <div className='flex gap-4'>
        <Image width={200} height={100} alt='daksha' src={"/daksha.png"} className='w-24 h-12'/>
            {/* title */}
            <h1 className='text-5xl tracking-wider'>Daksha 3.0</h1>
            </div>
            {/* <Image width={200} height={100} alt='daksha' src={"/logo.png"} className='w-24 h-12' /> */}

        </div>
        <div className='flex gap-8'>
            {/* links */}
            
            {NavLinks.map((link,index)=>(
                <Link key={index} className={`${link.path===pathName && "after:w-[100%]  after:bg-purple-700 after:duration-500   after:transition-all text-accent "} capitalize tracking-widest cursor-pointer text-base xl:text-lg relative after:w-4 after:h-[2px] after:bg-purple-700 after:absolute after:-bottom-1 after:left-0`} href={link.path}>
                    {link.name}
                </Link>
            ))}
        </div>
            </div>
    </div>
  )
}

export default Header


// className={`${index===itemIndex && "after:w-[100%]  after:bg-accent after:duration-300   after:transition-all text-accent "} capitalize tracking-widest cursor-pointer text-base xl:text-lg relative after:w-4 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}