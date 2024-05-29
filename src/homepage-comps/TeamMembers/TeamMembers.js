import React from 'react';
import "./TeamMembers.css";

// importing images 
import pratip from "../../assets/pratip.png"
import soumik from "../../assets/soumik.png"
import rik from "../../assets/rik.png"
import subhankar from "../../assets/subhankar.png"

function TeamMembers() {
    return (
        <div className='p-2rem-side-ways'>
            <div className='teammembers-wrapper'>
                <div className='teammembers-title'>
                    A TEAM OF FOUNDRES
                </div>
                <div className='teammembers-info-our-journey'>
                    <div className='teammembers-our-journey   predefined '>
                        O U R &nbsp; &nbsp;  J O U R N E Y
                    </div>
                    <div className='teammembers-info'>
                        We are a group of passionate individuals who came together with a shared vision of creating something remarkable. Our journey began in a small garage, armed with nothing but our laptops, an unwavering commitment to our dream, and a relentless drive to innovate.
                    </div>
                </div>
                <div className='memeber-images'>
                    <div className='member-card'>
                        <img src={subhankar} alt='Subhankar'/>
                        <div className='member-name'>Subhankar Ghosh</div>
                    </div>
                    <div className='member-card'>
                        <img src={pratip} alt='pratip '/>
                        <div className='member-name'>Pratip Mahanta</div>
                    </div>
                    <div className='member-card'>
                        <img src={soumik} alt=' Soumik'/>
                        <div className='member-name'>Soumik Ghosh</div>
                    </div>
                    <div className='member-card'>
                        <img src={rik} alt='rik '/>
                        <div className='member-name'>Pratay Mahanta</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembers