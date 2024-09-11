import React from 'react'
import Hero from '../components/Hero/Hero'
import NewProduct from '../components/NewProduct/NewProduct'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <NewProduct/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
