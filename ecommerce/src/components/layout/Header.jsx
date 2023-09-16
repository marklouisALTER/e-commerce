import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Header = () => {
useEffect(() => {

})
  return (
//     <header id="header" className='h-[35rem] overflow-hidden'>
    // <img 
    // className='h-full w-full object-cover'
    // src={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg'} />
// </header>

<Swiper
spaceBetween={50}
slidesPerView={1}
autoplay={{ delay: 1000, disableOnInteraction: false }} // Set autoplay to 1000 milliseconds (1 second)
speed={1000} // Set the transition speed to 1000 milliseconds (1 second)
loop={true} // Enable looping
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
className='h-[35rem] overflow-hidden'
>
<SwiperSlide> <img 
    className='h-full w-full object-cover'
    src={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg'} /></SwiperSlide>
<SwiperSlide> <img 
    className='h-full w-full object-cover'
    src={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg'} /></SwiperSlide>
<SwiperSlide> <img 
    className='h-full w-full object-cover'
    src={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg'} /></SwiperSlide>
<SwiperSlide> <img 
    className='h-full w-full object-cover'
    src={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg'} /></SwiperSlide>
</Swiper>
  )
}
