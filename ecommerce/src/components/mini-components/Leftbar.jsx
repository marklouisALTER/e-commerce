import React from 'react'
import { FaBars,FaHistory } from 'react-icons/fa'
import { TbShoe } from 'react-icons/tb'
import { ImHome3 } from 'react-icons/im'
import { BiListCheck } from 'react-icons/bi'
import { BsFillClipboardDataFill } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
export const Leftbar = ({leftbar}) => {
  return (
    <div className={`${leftbar ? 'w-[4rem]' : 'w-[20rem]'} p-1 bg-white shadow-md shadow-spread shadow-gray-400 transition-all delay-50 ease-in-out
    h-full overflow-x-hidden`}>
  
  <div className='w-full h-full grid grid-rows-5'>

      <div className='row-span-1 border-b-4 border-optional flex items-center justify-center'>
        
        <div className='flex gap-2 items-center rounded-md p-2 bg-transparent hover:bg-optional transition-all ease-in-out cursor-pointer'>
          
          <TbShoe className={`${leftbar ? 'object-cover w-full h-full text-primary' : 'text-primary'} text-4xl md:text-5xl`}/>
          <p 
              className={`${leftbar ? 'hidden': 'block'} text-primary font-secondary font-bold transition-all
              delay-200 ease-in-out text-2xl md:text-3xl`}>ShoeMark</p>
        </div>

      </div>
      <div className='row-span-4 mt-5 gap-5 flex flex-col justify-between'>
        <div>
            <div className={`${leftbar ? 'pt-1 mt-5 justify-center' : 'p-4'} flex gap-2 items-center border-r-2 border-gray-300 p-2 bg-transparent
                  hover:border-primary text-primary cursor-pointer transition-all delay-50 ease-in-out`}>
                    <ImHome3 className={`${leftbar ? 'text-2xl' : ''} text-1xl lg:text-2xl`} />
                <p 
                  className={`${leftbar ? 'hidden': 'block'} font-secondary ease-in-out text-md md:text-lg`}>Dashboard</p>
            </div>
            <div className={`${leftbar ? 'pt-1 mt-5 justify-center' : 'p-4'} flex gap-2 items-center border-r-2 p-2 bg-transparent
                    hover:border-primary text-primary cursor-pointer transition-all delay-50 ease-in-out`}>
                    <BiListCheck className={`${leftbar ? 'text-2xl' : ''} text-1xl lg:text-2xl`} />
                <p 
                  className={`${leftbar ? 'hidden': 'block'} font-secondary ease-in-out text-md md:text-lg`}>View Items</p>
            </div>
            <div className={`${leftbar ? 'pt-1 mt-5 justify-center' : 'p-4'} flex gap-2 items-center border-r-2 p-2 bg-transparent
                    hover:border-primary text-primary cursor-pointer transition-all delay-50 ease-in-out`}>
                    <FaHistory className={`${leftbar ? 'text-2xl' : ''} text-1xl lg:text-2xl`} />
                <p 
                  className={`${leftbar ? 'hidden': 'block'} font-secondary ease-in-out text-md md:text-lg`}>Transaction</p>
            </div>
            <div className={`${leftbar ? 'pt-1 mt-5 justify-center' : 'p-4'} flex gap-2 items-center border-r-2 p-2 bg-transparent
                    hover:border-primary text-primary cursor-pointer transition-all delay-50 ease-in-out`}>
                    <BsFillClipboardDataFill className={`${leftbar ? 'text-2xl' : ''} text-1xl lg:text-2xl`} />
                <p 
                  className={`${leftbar ? 'hidden': 'block'} font-secondary ease-in-out text-md md:text-lg`}>Sales Report</p>
            </div>
        </div>
        <div className={`${leftbar ? 'pt-1 mt-5 justify-center' : 'p-4'} flex gap-2 items-center border-r-2 p-2 bg-transparent
                  hover:border-primary text-primary cursor-pointer transition-all delay-50 ease-in-out`}>
                  <IoSettingsSharp className={`${leftbar ? 'text-2xl' : ''} text-1xl lg:text-2xl`} />
                <p 
                  className={`${leftbar ? 'hidden': 'block'} font-secondary ease-in-out text-md md:text-lg`}>Settings</p>
            </div>
      </div>
  </div>
</div>
  )
}
