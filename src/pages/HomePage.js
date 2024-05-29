import React from 'react'; 

// importing components
import CarouseComp from '../components/Carousel/CarouseComp';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import Banner from '../components/Banner/Banner';
// import DiscoverUS from '../homepage-comps/DiscoverUS/DiscoverUS';
import DiscoverUS from '../homepage-comps/DiscoverUS/DiscoverUS';

function HomePage() {
  return (
    <div>
      <CarouseComp />
      <QuickLinks />
      <Banner />
      <DiscoverUS />
    </div>
  )
}

export default HomePage