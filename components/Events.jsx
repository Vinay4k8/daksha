import React from 'react'
import EventSlider from './EventSlider'

const Events = () => {
  return (
    <div className='bg-[#333333]'>
        <div className='pt-32'>
            <h1 className='text-5xl uppercase tracking-[10px] font-normal text-center '>All Events</h1>
            <div className='flex justify-center items-center '>
                {/* events slider */}
                <EventSlider/>
            </div>
        </div>
    </div>
  )
}

export default Events