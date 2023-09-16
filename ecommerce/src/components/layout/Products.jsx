import React from 'react';
import { TbGenderDemiboy } from 'react-icons/tb'
import { BsGenderFemale, BsThreeDots } from 'react-icons/bs'
import { CgBoy } from 'react-icons/cg'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export const Products = () => {


  return (
    <div>
      <div className='px-[2rem] lg:px-[5rem] pt-[3rem] flex gap-3 items-center'>
        <BiSolidCategoryAlt className='text-2xl text-primary'/> 
          <h1 className='text-2xl font-bold text-primary'> Categories</h1>
      </div>
          
          <div className='grid grid-cols-2 md:grid-cols-5 gap-5 px-[5rem] py-[3rem]'>
            
            <div 
                data-aos="fade-up" 
                data-aos-delay="50" 
                data-aos-easing="ease-in-out" 
                className='flex items-center justify-center gap-3 p-3 px-5 bg-primary shadow-md transition-all
                delay-50 cursor-pointer ease-in-out rounded-md hover:shadow-spread-xl hover:shadow-gray-500
                hover:bg-secondary'>
                  <TbGenderDemiboy className='text-4xl text-white'/>
                  <h1 className='text-white'>Men</h1>
            </div>
            
            <div 
                data-aos="fade-up" 
                data-aos-delay="100" 
                data-aos-easing="ease-in-out" 
                className='flex items-center justify-center gap-3 p-3 px-3 bg-primary shadow-md transition-all 
                delay-100 cursor-pointer ease-in-out rounded-md hover:shadow-spread-xl hover:shadow-gray-500
                hover:bg-secondary'>
                  <BsGenderFemale className='text-4xl text-white'/>
                  <h1 className='text-white'>Women</h1>
            </div>
            
            <div 
                data-aos="fade-up" 
                data-aos-delay="150" 
                data-aos-easing="ease-in-out" 
                className='flex items-center justify-center gap-3 p-3 px-5 bg-primary shadow-md transition-all 
                delay-100 cursor-pointer ease-in-out rounded-md hover:shadow-spread-xl hover:shadow-gray-500
                hover:bg-secondary'>
                  <CgBoy className='text-4xl text-white'/>
                  <h1 className='text-white'>Kids</h1>
            </div>
            
            <div 
                data-aos="fade-up" 
                data-aos-delay="200" 
                data-aos-easing="ease-in-out" 
                className='flex items-center justify-center gap-3 p-3 px-5 bg-primary shadow-md transition-all 
                delay-100 cursor-pointer ease-in-out rounded-md hover:shadow-spread-xl hover:shadow-gray-500
                hover:bg-secondary'>
                  <HiOutlineViewGrid className='text-4xl text-white'/>
                  <h1 className='text-white'>View All</h1>
            </div>
            
            <div 
                data-aos="fade-up" 
                data-aos-delay="250" 
                data-aos-easing="ease-in-out" 
                className='flex items-center justify-center gap-3 p-3 px-5 bg-primary shadow-md transition-all 
                delay-100 cursor-pointer ease-in-out rounded-md hover:shadow-spread-xl hover:shadow-gray-500
                hover:bg-secondary'>
                  <BsThreeDots className='text-4xl text-white'/>
                  <h1 className='text-white'>More</h1>
            </div>
        </div>
    </div>
  );
};
