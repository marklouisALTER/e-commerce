import React, {useState, useEffect} from 'react'
import { ImLocation2 } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
import { TbCurrencyPeso } from 'react-icons/tb'
import { BiCategory } from 'react-icons/bi'
import { TbGenderDemiboy } from 'react-icons/tb'
import { BsGenderFemale } from 'react-icons/bs'
import { CgBoy } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

export const Card = (props) => {

  const [isHeart, setIsHeart] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const getLocalStorageHeart = localStorage.getItem(`isHeart${props.id}`);
    if(getLocalStorageHeart !== null){
      setIsHeart(getLocalStorageHeart === 'false');
    }
  },[])


  function handleHeart(){
    setIsHeart(prevState => !prevState)
    localStorage.setItem(`isHeart${props.id}`, isHeart);
  }
  
  function handleCardClick(){
    navigate(`/item/${props.id}`);
  }

  const heartValidation = isHeart ? <AiOutlineHeart className='absolute left-[10rem] top-3 text-2xl text-primary' /> : <AiFillHeart className='absolute left-[10rem] text-secondary top-3 text-2xl'/>

    return (
    <div onClick={handleCardClick} className='grid grid-rows-1 w-[12rem] cursor-pointer h-[20rem] shadow-md shadow-gray-400 rounded-xl transition-all delay-100 ease-in-out hover:shadow-xl hover:shadow-spread-2xl hover:shadow-secondary'>
        <div className='relative row-span-1'>
          <img src={props.img} className="absolute object-fit row-span-1 w-[100%] h-full rounded-t-xl border border-secondary"/>
            <div onClick={handleHeart} className='cursor-pointer'>
              {heartValidation}
            </div>
          </div>
              <div className='row-span-1 w-full bg-primary px-2 rounded-b-xl py-3'>
              {props.name.length > 15 ? 
              <h1 className='text-secondary text-xl px-1'>{props.name.slice(0,15)}...</h1> : <h1 className='text-secondary text-xl px-1'>{props.name}</h1> }
                
                {/* <div className='flex py-2 gap-1'>
                  <ImLocation2 className='text-white'/>
                  <p className='text-xs text-white'>{props.location}</p>
                </div> */}
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex gap-1 items-center'> 
                        <TbCurrencyPeso className='text-white'/>
                        <p className='text-secondary'>{props.price}</p>
                    </div>
                      
                    <div className='flex justify-end px-2 items-center gap-1'>
                        <AiFillStar className='text-white'/>
                        <p className='text-secondary text-xs'>{props.rate}</p>
                  </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex items-center gap-1'>
                    <BiCategory className='text-white'/>
                    <p className='text-secondary text-xs'>Category</p>
                </div>
                    <div className='flex flex-wrap gap-1'>
                        {Array.isArray(props.category) && 
                            props.category.map((items, index) => (
                              <p key={index} className='text-white flex flex-start items-center gap-2 text-xs bg-secondary px-3 rounded-full py-1'>
                                {items === 'Kids' ? <CgBoy /> : items === 'Female' ? <BsGenderFemale/> : <TbGenderDemiboy/>  }{items}
                              </p>)
                          )}
                    </div>
              </div>
        </div>
    </div>
  )
}
