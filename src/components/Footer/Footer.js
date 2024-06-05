import React from 'react';
import "./Footer.css"

// importing images 
import ph1 from "../../assets/ph_1.svg";
import ph2 from "../../assets/ph_2.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container-1'>
                <div className='subscribe-social'>
                    <h3>SUBSCRIBE</h3>
                    <span>Subscribe to stay tuned for your exams <br /> notifications lets do it</span>
                    <div className='subscription'>
                        <input type='email' placeholder='Enter Your Email Address' />
                        <button>Subscribe</button>
                    </div>
                    <div className='social-links'>
                        <div className='facebook round'><img src={facebook} /></div>
                        <div className='twitter round'></div>
                        <div className='instagram round'> <img src={instagram} /></div>
                        <div className='telegram round'><img src={telegram} /> </div>
                    </div>
                </div>
                <div className='footer-quick-links'>
                    <h3>PROFESSIONAL WEB DESIGN</h3>
                    <span className='footer-quick-link-span'> Hi! My name ia Dmitrii Rogoza and i’m an expert in web design and branding. I can help you make your website more attractive</span>
                    <div className='product-company'>
                        <div className='product'>
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Landing Page</a></li>
                                <li><a href="#">Popup Builder</a></li>
                                <li><a href="#">Web-design</a></li>
                                <li><a href="#">Content</a></li>
                                <li><a href="#">Integration</a></li>
                            </ul>
                        </div>
                        <div className='company'>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='ph-img'>
                    <img src={ph1} />
                    <img src={ph2} />
                </div>
            </div>

            <div className='footer-container-2'>
                <div>Indiana</div>
                <div></div>
                <div></div>
            </div>
            <div className='footer-container-3'>
                <div></div>
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default Footer