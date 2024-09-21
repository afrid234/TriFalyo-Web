import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import next from '../../assets/nextwhite.png';
import facebook from '../../assets/social/facebook.png';
import instagram from '../../assets/social/instagram.png';
import tiktok from '../../assets/social/tiktok.png';

const Footer = () => {
    return (

        <div>

            <footer className="footer-section">

                <div className="footer-columns">
                    {/* First Column - Company */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-list">
                            <li>About us</li>
                            <li>How it works</li>
                        </ul>
                    </div>

                    {/* Second Column - Help & Support */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Help & support</h4>
                        <ul className="footer-list">
                            <li>FAQ</li>
                            <li>Contact us</li>
                            <li>Tutorials</li>
                        </ul>
                    </div>

                    {/* Third Column - Our Plans */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Our Plans</h4>
                        <ul className="footer-list">
                            <li>Pricing</li>
                            <li>Tutorials</li>
                        </ul>
                    </div>

                    {/* Fourth Column - Partner & Integrations */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Partner with us</h4>
                        <ul className="footer-list">
                            <li>Request Integration</li>
                        </ul>

                        <div className="sizebox"></div>

                        <h4 className="footer-heading">Integrations</h4>
                        <ul className="footer-list">
                            <li>Uber Eats</li>
                            <li>Deliveroo</li>
                            <li>Just Eats</li>
                        </ul>
                    </div>

                    {/* Fifth Column - Login Button */}
                    <div className="footer-column login-column">
                        <button className="footer-login-btn">Login</button>
                    </div>
                </div>


                

                <div className="footer-columns_mobile">

                    <button className="footer-login-btn">Login</button>

                    {/* First Column - Company */}
                    <div className="footer-column">

                        <h4 className="footer-heading">Company</h4>

                        <img className="footericon_mobile" src={next}></img>
                        
                    </div>

                    {/* Second Column - Help & Support */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Help & support</h4>

                        <img className="footericon_mobile" src={next}></img>
                        
                    </div>

                    {/* Third Column - Our Plans */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Our Plans</h4>

                        <img className="footericon_mobile" src={next}></img>
                      
                    </div>

                    {/* Fourth Column - Partner & Integrations */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Partner with us</h4>

                        <img className="footericon_mobile" src={next}></img>
                      
                    </div>



                    <div className="footer-column">

                        <div className="footer_social">

                            <img className="social_size" src={facebook}></img>
                            <img className="social_size" src={instagram}></img>
                            <img className="social_size" src={tiktok}></img>


                        </div>

                    </div>


                  
                   
                </div>


            </footer>
        
        </div>
       
    );
};

export default Footer;
