import React from 'react'


const processStates=[
    {processNo:1,description:"Choose Individual School "},
    {processNo:2,description:"Choose a Department of choice"},
    {processNo:3,description:"Pick Techinical or    Non Technical Events"},
    {processNo:4,description:"Choose an Event and Register"},
    {processNo:5,description:"Have Fun at the Event"},
]


const Registration = () => {
  return (
    <div className='md:mx-10  my-10'>
        <div className='mt-14'>
            <h1 className='text-6xl capitalize tracking-[10px] font-medium text-center'>
            Registration Process
            </h1>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 xl:grid-cols-5 '>
                {processStates.map((item,index)=>(
                    <div key={index} className='flex flex-col  w-[180px] h-[200px] cursor-pointer gap-y-5 border-b-2 border-white rounded-md py-3 px-3'>
                        <span className='text-[#e6c7eb] text-5xl'>0{item.processNo}</span>
                        <span className='text-lg gap-y-3'>{item.description}</span>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Registration