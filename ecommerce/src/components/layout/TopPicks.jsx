import React, {useEffect, useState} from 'react'
import { HiTrendingUp } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { IoTicketSharp } from 'react-icons/io5'
import { Card } from './Card';
import DataShoe from '../../DataShoe';
import { ImSearch } from 'react-icons/im'
// import NotFound from '../../assets/pagenotfound.jpeg'

export const TopPicks = () => {
  const [searchData, setSearchData] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const [filterData, setFilterData] = useState(DataShoe);

  console.log(filterData)
  useEffect(()=> {
    const filterItems = DataShoe.filter((items) => {
    
      const automaticSearch = items.name.toLowerCase().includes(searchData.toLowerCase());
      const buttonData = items.tags.includes(activeSearch.toLowerCase());

      return automaticSearch

  
    })
    setFilterData(filterItems);
  }, [searchData, activeSearch]);



    const data = filterData.map((item) => (
    <Card
      key={item.id}
        {...item}
    />
  ));
// console.log(activeSearch)
  return (
    <div className='px-[0] pt-[2rem] lg:px-[5rem] w-screen h-screen'>
        <div className='flex gap-3 justify-between items-center border-b border-secondary'>
          <div className='grid grid-cols-3'>
              
              <buttons 
                      onClick={() => setActiveSearch('trending')}
                      className='flex flex-col items-center gap-1 p-2 border border-secondary rounded-t-xl
                      cursor-pointer bg-primary hover:bg-secondary transition-all delay-50 ease-in-out'>
                    <HiTrendingUp className='text-xl text-white'/> 
                    <h1 className='text-xs text-white'>Trending</h1>
              </buttons>

              <buttons 
                      onClick={() => setActiveSearch('sale')}
                      className='flex flex-col items-center gap-1 p-2 border border-secondary rounded-t-xl
                      cursor-pointer bg-primary hover:bg-secondary transition-all delay-50 ease-in-out'>
                    <IoTicketSharp className='text-white text-xl'/> 
                    <h1 className='text-xs text-white'>Sale</h1>
              </buttons>            

              <buttons 
                    onClick={() => setActiveSearch('most heart')}
                    className='flex flex-col items-center gap-1 p-2 border border-secondary rounded-t-xl
                    cursor-pointer bg-primary hover:bg-secondary transition-all delay-50 ease-in-out'>
                    <AiFillHeart className='text-xl text-white'/> 
                    <h1 className='text-xs text-white'>Most Heart</h1>
              </buttons>            

          </div>
          <div className='flex items-center gap-1'>
                <input
                      className='order-1 border-b border-transparent p-1 w-[30vw] focus:outline-none focus:border-b focus:border-secondary'
                      type="text"
                      placeholder='Search'
                      onChange={(e) => setSearchData(e.target.value)}
                />
                    <ImSearch className='text-xl text-primary'/>
                
          </div>
        </div>
        <div className='flex flex-wrap gap-[1rem] justify-center pt-[3rem] md:justify-start'>
            {data.length > 0 ? data : <p>Wala pang malagay</p>}
        </div>
    </div>
  )
}
