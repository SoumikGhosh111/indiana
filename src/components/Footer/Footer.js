import React from 'react';
import "./Footer.css"

// importing images 
import ph1 from "../../assets/ph_1.svg";
import ph2 from "../../assets/ph_2.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import siteLogo from "../../assets/SiteLogo.svg"; 

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
                <div className='footer-container-2-logo-address'>
                    <div><img src={siteLogo} /></div>
                    <div className='address'>Rampur Road Manohar Tala Bankura Near Boro Kali Mandir</div>
                </div>
                <a  href='tel:+1 800 854-36-80'>+1 800 854-36-80</a>
            </div>
            <div className='footer-container-3'>
                <div className='copy-right'>© 2021 All Rights Reserved</div>
                <ul>
                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='#'>Terms of Use</a>
                    </li>
                    <li>
                        <a href='#'>Sties and Refunds</a>
                    </li>
                    <li>
                        <a href='#'>Legal</a>
                    </li>
                    <li>
                        <a href='#'>Site Map</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer