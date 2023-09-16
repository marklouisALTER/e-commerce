import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export const Category = () => {
  return (
    <div className='mt-[30rem] md:mt-[8rem] grid grid-row-1 lg:grid-row-3 px-[2rem] md:px-[5rem] w-full h-screen'>
        
        <div className='row-span-2 gap-5 grid grid-cols-1 lg:grid-cols-3'>

            <div 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-bottom" 
                data-aos-delay="100" 
                data-aos-easing="ease-in-out" 
                className='relative overflow-hidden'>

                <div className='absolute inset-0'>
                    
                    <img 
                        className='h-full w-full object-cover transform transition-transform hover:scale-105'
                        src={'https://cdn.pixabay.com/photo/2017/08/12/19/01/legs-2635038_1280.jpg'} />

                    <div className='absolute flex flex-col justify-center gap-5 p-5 inset-0 z-[2] pointer-events-none'>
                        <h1 className='text-white text-3xl font-bold'>Durable Shoes</h1>
                        <p data-aos="fade-right" data-aos-delay="50" className='text-xs md:text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum modi qui quasi quaerat libero necessitatibus omnis, id optio maxime, debitis quae. Quidem sed, deserunt sit sapiente dicta iste dignissimos?</p>                  
                        
                        <div>
                            <button data-aos="zoom-in-right" className='bg-white p-3 px-5 rounded-lg z-[2]'>Shop Now</button>
                        </div>

                    </div>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            </div>


            <div 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-bottom" 
                data-aos-delay="150" 
                data-aos-easing="ease-in-out" 
                className='relative overflow-hidden'>

                <div className='absolute inset-0'>
                    <img 
                        className='h-full w-full object-cover transform transition-transform hover:scale-105'
                        src={'https://cdn.pixabay.com/photo/2017/03/27/14/26/woman-2179062_640.jpg'} />

                    <div className='absolute flex flex-col justify-center gap-5 p-5 inset-0 z-[2] pointer-events-none'>
                        <h1 className='text-white text-3xl font-bold'>Durable Shoes</h1>
                        <p data-aos="fade-right" data-aos-delay="100" className='text-xs md:text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum modi qui quasi quaerat libero necessitatibus omnis, id optio maxime, debitis quae. Quidem sed, deserunt sit sapiente dicta iste dignissimos?</p>                  
                        <div>
                            <button data-aos="zoom-in-right" className='bg-white p-3 px-5 rounded-lg z-[2]'>Shop Now</button>
                        </div> 
                    </div>

                </div>

                <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            </div>

            <div 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-bottom" 
                data-aos-delay="200" 
                data-aos-easing="ease-in-out" 
                className='relative overflow-hidden'>

                <div className='absolute inset-0'>
                    <img 
                        className='h-full w-full object-cover transform transition-transform hover:scale-105'
                        src={'https://cdn.pixabay.com/photo/2020/06/05/08/58/shoes-5262223_640.jpg'} />

                    <div className='absolute flex flex-col justify-center gap-5 p-5 inset-0 z-[2] pointer-events-none'>
                        <h1 className='text-white text-3xl font-bold'>Durable Shoes</h1>
                        <p data-aos="fade-right" data-aos-delay="150" className='text-xs md:text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum modi qui quasi quaerat libero necessitatibus omnis, id optio maxime, debitis quae. Quidem sed, deserunt sit sapiente dicta iste dignissimos?</p>                  
                        <div>
                            <button data-aos="zoom-in-right" className='bg-white p-3 px-5 rounded-lg z-[2]'>Shop Now</button>
                        </div> 
                    </div>

                </div>
                
                <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            </div>

        </div>


        <div className='hidden lg:block row-span-1'>

        </div>
    </div>
)
}
