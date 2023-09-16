import React, { useState,useEffect } from 'react'
import DataShoe from '../../DataShoe'
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
import { IoPricetags } from 'react-icons/io5'
import { Link } from 'react-router-dom' 

export const Item = () => {

    const {id} = useParams();
    console.log(id)
    const [browseData] = useState(DataShoe);
    const selectedItem = browseData.find(dataItems => dataItems.id == id);
    console.log(selectedItem)

    const [selectOptions, setSelectOptions] = useState(false);

    const toggleCart = () => {
        setSelectOptions(prevState => !prevState);
    }

    const buyNow = () => {
        toggleCart();
    }

    // useEffect(() => {
    //     if(selectOptions){
    //         document.body.style.overflow = 'scroll';
    //     }else{
    //         document.body.style.overflow = 'hidden';
    //     }

    // },[buyNow])

return (
    <div className=''>
        <div className='px-[1rem] py-5 pt-[4.5rem]'>
            {/* BreadCrumbs */}
            <div className='mr-auto p-2 flex gap-5'>
                <Link to={'/'} className='relative px-5 py-2 bg-primary text-white'>
                        Homepage
                    <div className='absolute top-0 right-[-20px] h-full w-0' style={{ borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderLeft: '20px solid #62564c' }}></div>
                </Link>
                <Link to={`/item/${id}`} className='relative px-10 bg-primary text-white flex items-center'>
                        {selectedItem.name.length > 20 ? <p>{selectedItem.name.slice(0,20)}...</p> : selectedItem.name}
                    <div className='absolute top-0 right-[-20px] h-full w-0' style={{ borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderLeft: '20px solid #62564c' }}></div>
                    <div className='absolute top-0 left-0 h-full w-0' style={{ borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderLeft: '20px solid white' }}></div>
                </Link>
            </div>

            <div className=' grid grid-cols-1 h-full'>

                <div className='mx-[1rem] mb-[5rem] grid grid-cols-1 md:grid-cols-3 shadow-md shadow-spread-xl shadow-gray-400'>

                    <div className='col-span-1 grid grid-rows-1 md:grid-rows-4'>
                        <div className='row-span-1 md:row-span-3'>

                          <img 
                              src={selectedItem.img} 
                              alt={selectedItem.name} 
                              className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='hidden md:row-span-1'>

                        </div>
                    </div>

                    <div className='col-span-2 bg-primary'>
                        <h1 className='text-3xl p-3 font-bold text-secondary'>{selectedItem.name}</h1>
                        <div className='flex gap-5 p-2 px-5'>
                            <div className='flex items-center gap-1'>
                                <AiFillStar className='text-xl text-secondary'/>
                                <p className='text-xl text-white'>{selectedItem.rate} Rates</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <BsFillCartCheckFill className='text-xl text-secondary'/>
                                <p className='text-xl text-white'>{selectedItem.sold} Solds</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center py-2 px-5'>
                            <p>{selectedItem.isheart ? <AiFillHeart className='text-2xl text-secondary'/> : <AiOutlineHeart className='text-2xl text-secondary'/>}</p>
                            <p className='text-white'>{selectedItem.favorites} Favorites</p>
                        </div>
                        <div className='flex gap-5 px-5 py-5 items-center'>
                            <IoPricetags className='text-3xl text-secondary'/>

                            {selectedItem.sale ? 
                            <div className='flex gap-1'>
                            <p className='text-3xl line-through text-red-500'>{selectedItem.price}</p><p className='text-white'>{selectedItem.sale}</p>
                            </div>: <p className='text-3xl text-white'>{selectedItem.price}</p>}
                            
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex flex-col gap-5 px-5 py-5'>
                                <p className='bg-primary text-white px-5 py-1 mr-auto'>Tags :</p>
                                <div className='flex gap-5 ml-5'>
                                    {selectedItem.tags.map(items => <p className='bg-secondary px-5 py-1 text-white'>{items}</p>)}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div className='flex flex-col gap-5 p-5'>
                                    <p className='bg-primary mr-auto text-white px-5 py-1'>Available Colors :</p>
                                    <div className='flex flex-wrap ml-5 gap-5'>
                                        {selectedItem.color.map(items => <p className='bg-secondary px-5 text-white p-2 rounded-sm'>{items}</p>)}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 p-5'>
                                    <p className='bg-primary mr-auto text-white px-5 py-1'>Available Sizes :</p>
                                    <div className='flex flex-wrap gap-5 ml-5'>
                                        {selectedItem.size.map(items => <p className='bg-secondary text-white p-2 rounded-sm'>{items}</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex py-10 gap-5 justify-center'>
                            <button 
                                    onClick={buyNow}
                                    className='px-5 py-2 rounded-md bg-secondary border text-white 
                                    hover:bg-transparent hover:border-secondary hover:text-secondary
                                    transition-all delay-100 ease-in-out flex items-center gap-2'>
                                <BsFillCartCheckFill/>
                                Add to Cart
                            </button>
                            <button className='px-5 py-2 rounded-md bg-primary border text-white 
                            hover:bg-transparent hover:border-primary hover:text-primary
                            transition-all delay-100 ease-in-out flex items-center gap-2'>
                                
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </div>
)
}
