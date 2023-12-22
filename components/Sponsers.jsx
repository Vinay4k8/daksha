import Image from 'next/image'
import React from 'react'



const data=[
    {
        title:"sponser 1",description:"This is placeholder text. To change this content, double-click on the element and click Change Content.",imgURL:"/engineering-blueprint.jpg"
    },
    {
        title:"sponser 2",description:"This is placeholder text. To change this content, double-click on the element and click Change Content.",imgURL:"/engineering-blueprint.jpg"
    },
    {
        title:"sponser 3",description:"This is placeholder text. To change this content, double-click on the element and click Change Content.",imgURL:"/engineering-blueprint.jpg"
    },
    {
        title:"sponser 4",description:"This is placeholder text. To change this content, double-click on the element and click Change Content.",imgURL:"/engineering-blueprint.jpg"
    }
]

const Sponsers = () => {
  return (
    <div className='w-full flex flex-col gap-y-10  justify-center items-center'>
        <h1 className='mt-10 text-5xl tracking-widest'>Sponsers</h1>
        <div className='grid  gap-x-52 gap-y-32 grid-cols-1  xl:grid-cols-2 my-10'>
            {data.map((item,index)=>(
                <div key={index} className='relative w-[400px] h-[400px] z-10 flex justify-center items-center'>
                    <Image fill src={item.imgURL} />
                    <div className='absolute -right-16 bg-black text-white p-2 rounded-md left-[40%] flex flex-col gap-y-8 py-6 px-8'>
                        <h3 className='text-3xl capitalize'>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className='border-[2px] border-gray-400 rounded-sm hover:bg-purple-700 duration-500 transition-all hover:text-white px-4 py-2 w-max'>
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sponsers