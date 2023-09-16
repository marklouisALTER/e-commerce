import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='w-full h-screen grid grid-rows-2'>
        
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-1 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-semibold italic text-xl'>Follow me on:</h1>
                <div className='flex gap-3'>
                    <Link to={'https://github.com/marklouisALTER'} 
                          target='_blank' 
                          className='bg-primary flex p-4 items-center gap-3 justify-center rounded-md 
                          focus:outline-none focus:ring focus:ring-primary hover:bg-secondary
                          transition-all delay-100 ease-in-out'>

                        <FaGithubSquare className='text-4xl text-white'/>

                    </Link>
                    <Link to={'https://www.linkedin.com/in/bernardo-mark-louis-a-684b31249/'} 
                          target='_blank'
                          className='bg-primary flex p-4 items-center gap-3 justify-center rounded-md 
                          focus:outline-none focus:ring focus:ring-primary hover:bg-secondary 
                          transition-all delay-100 ease-in-out'>

                        <AiFillLinkedin className='text-white text-4xl'/>
                    </Link>
                </div>
            </div>
            <div className='col-span-2 bg-gray-300'>
                {/* mga inputs */}
            </div>
        </div>
        <div className='relative bg-primary'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
                className='absolute bottom-0'
                >

                <path 
                      fill="#cfbfb3" 
                      fill-opacity="1" 
                      d="M0,96L240,224L480,160L720,160L960,128L1200,160L1440,192L1440,320L1200,320L960,320L720
                      ,320L480,320L240,320L0,320Z">
                </path>
            </svg>
        </div>
    </div>
  )
}
