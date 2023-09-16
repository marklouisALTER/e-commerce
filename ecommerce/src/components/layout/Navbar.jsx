import React, { useEffect, useState } from 'react'
import { TbShoe } from 'react-icons/tb'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { TbGenderDemiboy } from 'react-icons/tb'
import { BsGenderFemale } from 'react-icons/bs'
import { CgBoy } from 'react-icons/cg'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillCaretDown } from 'react-icons/ai'
import { BiCoffeeTogo,BiSolidUserPlus } from 'react-icons/bi'
import { SlLogin } from 'react-icons/sl'

export const Navbar = () => {
const [scrollPosition, setScrollPosition] = useState(0);
const [isClosed, setIscClosed] = useState(true);
const [viewCategory, setViewCategory] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setScrollPosition(window.scrollY);
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const toggleMenu = () => {
        setIscClosed(prevState => !prevState); 
    }

    const toggleCat = () => {
        setViewCategory(prevState => !prevState);
    }
    // rgba(255, 255, 255, 0.5)
    const navbarStyle = {
        backgroundColor: scrollPosition === 0 ? '#62564c' : '#cfbfb3',
        backdropFilter: scrollPosition === 0 ? 'none' : 'blur(5px)',
    }

    const fontColors = {
        color : scrollPosition === 0 ? '#cfbfb3' : '#62564c'
    }

    const hamburger = {
        color : scrollPosition === 0 ? '#cfbfb3' : '#62564c'

    }

  return (
    <nav className='fixed w-full flex justify-between items-center p-3 px-[2rem] z-[10]' style={navbarStyle}>
        <Link to={'/'} className='flex items-center gap-2'>
            <TbShoe className='text-4xl md:text-5xl text-secondary' style={fontColors}/>
            <p className='font-primary font-bold text-2xl md:text-3xl' style={fontColors}>ShoeMark</p>
        </Link>
        <div className='hidden md:flex gap-3'>

            <div 
                className='bg-primary p-2 rounded-md' 
                style={scrollPosition === 0 ? 
                {backgroundColor: '#cfbfb3'} : {backgroundColor: '#62564c'}}>

                <CiShoppingCart 
                    className='text-white text-2xl' 
                    style={scrollPosition === 0 ? 
                    {color: '#62564c'} : {backgroundColor: '#62564c'}}/>

            </div>
            
            <Link to={'/login'} className='flex items-center gap-4 border border-gray-300 rounded-full
                p-2 px-4 shadow-md shadow-spread hover:shadow-xl cursor-pointer'>
                <FaRegUserCircle 
                    className='text-2xl' 
                    style={fontColors}/>

                <IoSettingsSharp 
                    className='text-2xl' 
                    style={fontColors}/>
            </Link>
        </div>
        <NavLink 
            className='flex md:hidden'
            onClick={toggleMenu}
            
            >
            <GiHamburgerMenu className={`text-2xl hover:`} style={hamburger}/>

        </NavLink>


        {/* Mobile view */}
        <div 
            className={`fixed overflow-hidden ${isClosed ? 'w-0': 'w-1/2' } 
            h-screen bg-secondary absolute inset-0 transition-all delay-200 ease-in-out
            grid grid-rows-6 md:hidden `}>
            <div className='row-span-1 flex items-start py-4 justify-start gap-2 px-5'>
                <TbShoe className='text-4xl md:text-5xl text-primary'/>
                <p className='font-primary font-bold text-2xl md:text-3xl text-primary'>ShoeMark</p>
            </div>
            <div className='row-span-4 flex flex-col'>
            <button
                    onClick={toggleCat}
                    className={`font-bold flex justify-between items-center text-primary text-left px-3 font-primary w-full py-3 
                    hover:bg-primary hover:text-white transition-all delay-100 ease-in-out 
                    ${viewCategory ? 'bg-primary text-white' : 'bg-secondary text-primary' }`}>
                    Category
                    <AiFillCaretDown className={`transform ${viewCategory ? 'rotate-0' : 'rotate-90'} transition-all delay-50 ease-in-out`}/>
            </button>
                <div>
                    <div
                         className={`${viewCategory ? 'block' : 'hidden'} w-full font-primary text-sm text-primary px-5 py-3 flex items-center gap-2`}>
                            <TbGenderDemiboy className='text-xl'/>
                            Men
                    </div>
                    <div
                         className={`${viewCategory ? 'block' : 'hidden'} w-full font-primary text-sm text-primary px-5 py-3 flex items-center gap-2`}>
                            <BsGenderFemale className='text-xl'/>
                            Women
                    </div>
                    <div
                         className={`${viewCategory ? 'block' : 'hidden'} w-full font-primary text-sm text-primary px-5 py-3 flex items-center gap-2`}>
                            <CgBoy className='text-2sm'/>                            
                            Kids
                    </div>
                </div>
                
                <Link to={''} 
                        className='text-left px-2 font-primary font-bold text-primary w-full py-3 transition-all 
                        delay-100 ease-in-out hover:bg-primary hover:text-white flex items-center gap-2'>
                    <CiShoppingCart className='text-xl'/>
                    View All Products
                </Link>
                <Link to={''} 
                        className='text-left px-2 font-primary font-bold text-primary w-full py-3 transition-all
                        delay-100 ease-in-out flex items-center gap-2 hover:bg-primary hover:text-white'>
                    <BiCoffeeTogo className='text-xl'/>
                    Support me
                </Link>
                <Link to={''} 
                        className='text-left px-2 font-primary font-bold text-primary w-full py-3 transition-all
                        delay-100 ease-in-out flex items-center gap-2 hover:bg-primary hover:text-white'>
                    <FaGithubSquare className='text-xl'/>
                    Github
                </Link>
            </div>
            <div>
            <Link to={'/login'}  
                    className='text-center px-2 font-primary font-bold text-primary 
                    w-full py-3 transition-all delay-100 ease-in-out flex items-center gap-2'>
                    <SlLogin className='text-xl'/>
                    Sign in
                </Link>
            <Link to={''} 
                     className='text-center px-2 font-primary font-bold text-primary 
                     w-full py-3 transition-all delay-100 ease-in-out flex items-center gap-2'>
                     <BiSolidUserPlus className='text-xl'/>
                    Sign Up
                </Link>
            </div>
        </div>

</nav>
  )
}
