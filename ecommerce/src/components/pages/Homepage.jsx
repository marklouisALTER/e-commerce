import React from 'react'
import { Header } from '../layout/Header'
import { Products } from '../layout/Products'
import { TopPicks } from '../layout/TopPicks'
import { Category } from '../layout/Category'
import { About } from '../layout/About'
export const Homepage = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Products />
      <TopPicks />
      <Category/>
      <About />
    </div>
  )
}
