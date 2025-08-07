import React from 'react'
import Carousel from '@/componets/Home/Slider/Carousel'
import OurCoreValue from '@/componets/Home/OurCoreValue/OurCoreValue'
import Review from '@/componets/Home/Review/Review'
import Footer from '@/componets/Footer/Footer'
import ProductCard from '@/componets/Home/ProductCard'

const Home = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Carousel />
        <OurCoreValue />
        <ProductCard />
        <Review />
        <Footer />
      </div>
    </>
  )
}

export default Home