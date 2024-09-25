import { useState } from 'react'
import './SubHeader.css'
import logo from '../../assets/logo/sub.jpg'
import right from '../../assets/logo/right.png'


const SubHeader = () => {
    const [count, setCount] = useState(0)

    return (
        <div>

            <div className="sub_container">


                <div className="SubPackage_container">

                    <div className="SubPackage_content">

                        <div className="SubPackage_Row">



                            <div className="package_head">

                                <div className="package_head_row">

                                    <img className="package_logo" src={logo}></img>
                                    <h3>Resturant</h3>

                                </div>

                            </div>


                            <div className="package_header">

                                <p>Perfect for businesses selling on multiple online platforms</p>

                            </div>

                            <div className="subtitle_pac_row">
                                <p>From</p>
                                <h1>USD 199</h1>
                                <p>/month</p>
                            </div>

                            <div className="purchase_group">
                                <button className="purchase_btn">Get Started</button>

                            </div>

                            <p className="annually">USD 2300 billed annually</p>

                            <h3>Include:</h3>

                            <div className="package_list">

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>Starting at $350 per month</p>
                                </li>

                                <div className="divider_li"></div>


                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>POS order integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party API integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party Menu Management</p>
                                </li>


                            </div>

                            <h3 className="seemore">Show more</h3>


                        </div>


                        <div className="SubPackage_Row">



                            <div className="package_head">

                                <div className="package_head_row">

                                    <img className="package_logo" src={logo}></img>
                                    <h3>Resturant</h3>

                                </div>

                            </div>


                            <div className="package_header">

                                <p>Perfect for businesses selling on multiple online platforms</p>

                            </div>

                            <div className="subtitle_pac_row">
                                <p>From</p>
                                <h1>USD 199</h1>
                                <p>/month</p>
                            </div>

                            <div className="purchase_group">
                                <button className="purchase_btn">Get Started</button>

                            </div>

                            <p className="annually">USD 2300 billed annually</p>

                            <h3>Include:</h3>

                            <div className="package_list">

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>Starting at $350 per month</p>
                                </li>

                                <div className="divider_li"></div>


                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>POS order integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party API integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party Menu Management</p>
                                </li>


                            </div>

                            <h3 className="seemore">Show more</h3>


                        </div>


                        <div className="SubPackage_Row">



                            <div className="package_head">

                                <div className="package_head_row">

                                    <img className="package_logo" src={logo}></img>
                                    <h3>Resturant</h3>

                                </div>

                            </div>


                            <div className="package_header">

                                <p>Perfect for businesses selling on multiple online platforms</p>

                            </div>

                            <div className="subtitle_pac_row">
                                <p>From</p>
                                <h1>USD 199</h1>
                                <p>/month</p>
                            </div>

                            <div className="purchase_group">
                                <button className="purchase_btn">Get Started</button>

                            </div>

                            <p className="annually">USD 2300 billed annually</p>

                            <h3>Include:</h3>

                            <div className="package_list">

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>Starting at $350 per month</p>
                                </li>

                                <div className="divider_li"></div>


                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>POS order integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party API integration</p>
                                </li>

                                <div className="divider_li"></div>

                                <li className="li_row">

                                    <img className="li_logo" src={right}></img>
                                    <p>3rd Party Menu Management</p>
                                </li>


                            </div>

                            <h3 className="seemore">Show more</h3>


                        </div>


                    </div>

                </div>


            </div>

          

            <div className="FAQ_group">

                <h2 className="solutions">More solutions</h2>

                <div class="banner">
                    <div class="banner-content">


                        <img class="icon" src={logo} alt="Logo"></img>
                        

                        <div class="sub_text-content">
                            <h4>NEW: Pulse by TriFalyo</h4>
                            <p>3rd Party Menu Management</p>
                        </div>
                        <div class="pricing">
                            <p>From <strong>USD 199</strong> /month</p>
                        </div>
                        <div class="cta-button">
                            <a href="#" class="get-started-button">Get Started</a>
                        </div>


                    </div>

                    <a href="#" class="get-started-button_mobile">$199</a>

                </div>


                <div class="banner">
                    <div class="banner-content">


                        <img class="icon" src={logo} alt="Logo"></img>


                        <div class="sub_text-content">
                            <h4>NEW: Pulse by TriFalyo</h4>
                            <p>3rd Party Menu Management</p>
                        </div>
                        <div class="pricing">
                            <p>From <strong>USD 199</strong> /month</p>
                        </div>
                        <div class="cta-button">
                            <a href="#" class="get-started-button">Get Started</a>
                        </div>


                    </div>

                    <a href="#" class="get-started-button_mobile">$199</a>

                </div>




                <div class="banner">
                    <div class="banner-content">


                        <img class="icon" src={logo} alt="Logo"></img>


                        <div class="sub_text-content">
                            <h4>NEW: Pulse by TriFalyo</h4>
                            <p>3rd Party Menu Management</p>
                        </div>
                        <div class="pricing">
                            <p>From <strong>USD 199</strong> /month</p>
                        </div>
                        <div class="cta-button">
                            <a href="#" class="get-started-button">Get Started</a>
                        </div>


                    </div>

                    <a href="#" class="get-started-button_mobile">$199</a>

                </div>



                <div class="banner">
                    <div class="banner-content">


                        <img class="icon" src={logo} alt="Logo"></img>


                        <div class="sub_text-content">
                            <h4>NEW: Pulse by TriFalyo</h4>
                            <p>3rd Party Menu Management</p>
                        </div>
                        <div class="pricing">
                            <p>From <strong>USD 199</strong> /month</p>
                        </div>
                        <div class="cta-button">
                            <a href="#" class="get-started-button">Get Started</a>
                        </div>


                    </div>

                    <a href="#" class="get-started-button_mobile">$199</a>

                </div>


            </div>

        </div>
    )
}

export default SubHeader