import React from 'react';
import "./QuickLinks.css"

function QuickLinks() {
  return (
    <div className='quick-links-wrapper'>
        <div className='quick-links'>
            <span>go to</span>
            <a href='#'>Our Courses</a>
        </div>
        <div className='quick-links'>
            <span>See</span>
            <a href='#'>All Questions</a>
        </div>
        <div className='quick-links current-affairs-links'>
            <span>Read</span>
            <a href='#'>Current Affairs</a>
        </div>
        <div className='quick-links followers'>
            <span>1M+</span>
            <span className='followers-users'>USERS</span>
        </div>
    </div>
  )
}

export default QuickLinks