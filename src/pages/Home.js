import React from 'react'
import Cats from '../comps/Cats'
import Slider from '../comps/Cats'
import Features from '../comps/Features'
import TrendingProducts from '../comps/TrendingProducts'
import Deal from '../assets/home/1.jpg';
import Shape3 from '../assets/home/shape3.png';

import T1 from '../assets/home/t1.jpg';
import Button from '../comps/Button'
import Discount from '../comps/Discount'
import Footer from '../comps/Footer'



function Home() {
  return (
    <>
    <Cats/>
    <Features/>
    <TrendingProducts/>
    <Discount/>
    </>
  )
}

export default Home