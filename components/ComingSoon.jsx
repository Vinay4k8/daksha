import Image from 'next/image'
import React from 'react'


const data=[
    {day:1,image:"",events:["Event Titles","Event Titles","Event Titles","Event Titles","Event Titles","Event Titles"],right:false},
    {day:2,image:"",events:["Event Titles","Event Titles","Event Titles","Event Titles","Event Titles","Event Titles"],right:true},
    
]


const ComingSoon = () => {
  return (
    <div className=' md:mx-10 md:px-10'>
        <div>
            <h1 className='capitalize text-5xl mt-20 pt-10 text-center tracking-[7px]'>
                coming soon
            </h1>
            <div className='mt-10 bg-[#333333]'>
            {data.map((item,index)=>(
                <div key={index} className='flex md:flex-row flex-col my-10 '>
                    {item.right && <Image width={400} height={400} alt={"img"}
                    src={"/day2.webp"}
                    className='w-[50%]'
                    />
                    }
                    <div className='w-[50%] flex flex-col gap-y-5 '>
                        {item.events.map((eve,ind)=>(
                            <div className='flex justify-center'>
                            <div key={ind} className=' border-b-[3px] w-max border-blue-400 group mx-5 my-5 ' >
                                <p className='text-5xl  flex justify-center py-2  gap-5 hover:-translate-y-3 duration-300 hover:text-yellow-400 '>

                                <span className='text-purple-400'>0{ind+1}</span>{eve}
                                </p>
                            </div>
                            </div>
                        ))}
                    </div>
                    {!item.right && <Image width={400} height={400} alt={"img"}
                    src={"/day2.webp"}
                    className='w-[50%]'
                    />
                    }
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default ComingSoon