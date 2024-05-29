import React from 'react'; 

// importing components
import CarouseComp from '../components/Carousel/CarouseComp';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import Banner from '../components/Banner/Banner';
import DiscoverUS from '../homepage-comps/DiscoverUS/DiscoverUS';
import Courses from '../homepage-comps/Courses/Courses';
import TeamMembers from '../homepage-comps/TeamMembers/TeamMembers';

function HomePage() {
  return (
    <div>
      <CarouseComp />
      <QuickLinks />
      <Banner />
      <DiscoverUS />
      <Courses />
      <TeamMembers />
    </div>
  )
}

export default HomePage