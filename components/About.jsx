import Image from 'next/image'
import React from 'react'


const data=[
    {title:"OUR EVENT",
    description:"Daksha 3.0 is a national level techo-cultural fest hosted at Anurag University in Hyderabad, India. The festival showcases a wide range of events organized by various departments and clubs of the university. Anurag University is located in Venkatapur, Ghatkesar, Hyderabad, Telangana. Daksha 3.0 is a highly anticipated event for the students as it provides a refreshing break from their studies. The website for Daksha 3.0 will serve as a one-stop platform for students to register for all the events. The registration process will include a secure transaction through payment gateways like Google Pay or PhonePe.",image:"/university.jpeg",right:false},
    {title:"THE ORGANIZERS",description:"Daksha 3.0 is organized by the various departments and clubs at Anurag University. The event is managed by a team of dedicated students who work tirelessly to make it a success. From organizing events to managing logistics and coordinating with sponsors, the organizers ensure that Daksha 3.0 is a memorable experience for all the participants.",image:"/university.jpeg",right:true},
]

const About = () => {
  return (
    <div>
        <div>
            <h1 className='text-5xl tracking-[10px] font-medium uppercase text-center my-10 '>About daksha 3.0</h1>
            <div className='bg-[#333333] md:mx-10'>
                {data.map((item,index)=>(
                    <div className='flex gap-5' key={index}>
                         {item.right && <Image
                        src={item.image}
                        width={600}
                        height={500}
                        alt={item.title}
                        className='w-[50%] h-[600px]'
                        />}
                        <div className='w-[50%] flex justify-center items-center my-4 flex-col'>
                        <h3 className='text-4xl font-normal my-5 '>{item.title}</h3>
                        <p className='mx-14 text-lg'>{item.description}</p>
                        </div>
                        {!item.right && <Image
                        src={item.image}
                        width={600}
                        height={700}
                        alt={item.title}
                        className='w-[50%] h-[600px]'
                        />}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About