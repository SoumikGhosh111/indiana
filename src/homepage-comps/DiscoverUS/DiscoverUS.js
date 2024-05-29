import React from 'react';
import "./DiscoverUs.css"

// importing medias
import exploreImg from "../../assets/exploreus.svg";

function DiscoverUS() {
    return (
        <div className='p-2rem-side-ways'>
            <div className='discover-us-wrapper'>
                <div className='discover-us-title'>
                    <h1>
                        DISCOVER INDIANA
                    </h1>
                    {/* <div className='ver-line'></div> */}
                </div>
                <div className='discover-us-info'>
                    <p>
                        Indiana is a beacon of knowledge for aspiring candidates of Indian government exams, offering a wealth of resources to ensure success. Our platform provides unlimited practice questions, comprehensive mock tests, specialized courses, up-to-date current affairs articles, detailed notifications with exam updates, and clear syllabus with roadmaps. We are committed to fostering a learning environment that is both accessible and effective, helping you turn your aspirations into achievements.
                    </p>
                    <img className='exploreus' src={exploreImg} alt='Explore use Image' />
                </div>
            </div>
        </div>
    )
}

export default DiscoverUS