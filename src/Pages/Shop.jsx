import React from 'react'
import Home from '../Components/Home/Home'
import Offer from '../Components/Offer/Offer'
import NewArrival from '../Components/NewArrival/NewArrival'
import Container from '../Components/Container/Container'
import Mens from '../Components/Mens/Mens'
import Womens from '../Components/Womens/Womens'
import Brands from '../Components/Brands/Brands'
import Limelight from '../Components/Limelight/Limelight'
import Feedback from '../Components/Feedback/Feedback'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Home/>
      <Offer/>
      <NewArrival/>
      <Container/>
      <Mens/>
      <Womens/>
      <Brands/>
      <Limelight/>
      <Feedback/>
    </div>
  )
}

export default Shop
