import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='p-2rem-side-ways'>
      <div className='banner-wrapper'>
        <div className='info-text'>
          <div className='initial-info'>Ichhedana: Empowering Lives, Nurturing Earth, and Building Communities</div>
          <button className='info-button'>Know More</button>
        </div>
        <div className='more-info'>At Ichhedana, we’re more than an NGO—we’re a force for positive change. From education to environmental stewardship, we’re committed to making a difference. Click Know More to learn more.</div>
      </div>
    </div>
  )
}

export default Banner