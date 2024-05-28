import React from 'react'; 

// importing components
import CarouseComp from '../components/Carousel/CarouseComp';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import Banner from '../components/Banner/Banner';

function HomePage() {
  return (
    <div>
      <CarouseComp />
      <QuickLinks />
      <Banner />
    </div>
  )
}

export default HomePage