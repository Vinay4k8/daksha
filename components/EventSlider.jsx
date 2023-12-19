"use client"
import {Swiper,SwiperSlide} from "swiper/react"
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination'
  // import Swiper from 'swiper';
  import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
  // data
 

  const def=""

  const EventData=[
    {title:"school of Engneering",image:""},
    {title:"school of pharmacy",image:""},
    {title:"school of management",image:""},
    {title:"school of agriculture",image:""},
    {title:"school of medical sciences",image:""},
  ]


//   engineering-blueprint.jpg
  
  const EventSlider = () => {
    return <Swiper
    breakpoints={{
        320:{
            slidesPerView:1,spaceBetween:15
        },
        640:{
            slidesPerView:3,spaceBetween:10
        },
        840:{
            slidesPerView:2,spaceBetween:10
        },
        1200:{
            slidesPerView:4,spaceBetween:10
        }
    }}
    
    pagination={{
        clickable:true
    }}
    navigation
    modules={[Navigation,Pagination]}
    className="h-[500px] my-10  z-10"
    >
{
    EventData.map((item,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="bg-white/10  rounded-lg py-2 px-2 sm:px-6 sm:py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group w-[400px] h-[400px] cursor-pointer ml-10 relative group duration-500 transition-all" >
                    <Image src={item.image.length>0?item.image:"/engineering-blueprint.jpg"}
                    alt="event image"
                    width={500}
                    height={500}
                    className="w-full h-full relative"
                    />
                    <div className="hidden group-hover:flex w-full h-full group-hover:absolute bottom-0 left-0 right-0 z-10 bg-white/30 justify-center items-center text-2xl capitalize text-black   font-semibold">
                        {item.title}
                    </div>
                </div>
            </SwiperSlide>
        )
    })
}
    </Swiper>;
  };
  
  export default EventSlider;