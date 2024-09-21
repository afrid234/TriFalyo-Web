import React from 'react'
import './nav.css'
import logo from '../../assets/logo/logo.png'
import Header from '../header/header'
import solution_img from '../../assets/tech.jpg'

import justeat from '../../assets/logo/justeat.png'
import uberat from '../../assets/logo/ubereat.png'
import deliveroo from '../../assets/logo/deliveroo.jpg'
import arrow from '../../assets/arrow.png';
import tutorial_logo from '../../assets/logo/tutoriallogo.jpg'

import menu_img from '../../assets/headers/menumanagement.jpg'
import order_img from '../../assets/headers/ordermanagement.jpg'
import store_img from '../../assets/headers/storemangement.jpg'
import menu from '../../assets/menu.png';
import next from '../../assets/next.png';
import cross from '../../assets/close.png';

import {useState} from 'react'


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Function to toggle the drawer and icon
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="container">

           

            <div class="navigation_part1">

                <img className="logo" src={logo} alt=""></img>

                <div className="nav_ul">

                    <div className="nav_li">
                        <div className="navitem">

                            <div className="navgroup">

                                <div className="integration">Integrations</div>
                                <img className="navicon" src={arrow}></img>

                            </div>


                            <div className="solutionBox">

                                <div className="solutionContent">

                                    <div className="integrationRow">

                                        <img className="inetgartion_item_hearder_pic" src={menu_img}></img>

                                    </div>



                                    <div className="solutionRow">


                                        <h4 className="tutorialtitle">Integration partners</h4>

                                        <div className="sizedBox"></div>


                                        <ul className="solution-links">

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="icon" src={deliveroo}></img>

                                                    <h4 className="subitem_initgreation">Deliveroo</h4>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="icon" src={justeat}></img>

                                                    <h3 className="subitem_initgreation">Just Eats</h3>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="icon" src={uberat}></img>

                                                    <h3 className="subitem_initgreation">Uber Eats</h3>

                                                </div>
                                            </li>

                                            <li>

                                                <div className="sizedBox"></div>

                                            </li>


                                        </ul>


                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="nav_li">
                        Subscriptions
                    </div>


                    <div className="nav_li">
                        <div className="">

                            <div className="navgroup">

                                <div className="integration">Resources</div>
                                <img className="navicon" src={arrow}></img>

                            </div>




                        </div>
                    </div>


                    <div className="nav_li">
                        <div className="tutorialitem">

                            <div className="navgroup">

                                <div className="integration">Tutorials</div>
                                <img className="navicon" src={arrow}></img>

                            </div>


                            <div className="tutorialBox">

                                <div className="solutionContent">




                                    <div className="tutorialRow">





                                        <div className="tutorial_item_header">

                                            <img className="tutotial_item_icon" src={tutorial_logo}></img>

                                            <h4 className="tutorialtitle">Order management</h4>


                                        </div>



                                        <ul className="solution-links">

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="tutotial_item_hearder_pic" src={order_img}></img>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">

                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Online Ordering</h3>
                                                        <p className="subitem_p" >Manage your online store</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">



                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Loyalty & CRM</h3>
                                                        <p className="subitem_p" >Manage your online store</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">


                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Pickup</h3>
                                                        <p className="subitem_p" >Manage your online store</p>


                                                    </div>

                                                </div>
                                            </li>


                                        </ul>


                                    </div>




                                    <div className="tutorialRow">





                                        <div className="tutorial_item_header">

                                            <img className="tutotial_item_icon" src={tutorial_logo}></img>

                                            <h4 className="tutorialtitle">Menu management</h4>


                                        </div>



                                        <ul className="solution-links">

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="tutotial_item_hearder_pic" src={menu_img}></img>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">

                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Add Menu</h3>
                                                        <p className="subitem_p" >Add new items and categories</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">



                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Delete Menus</h3>
                                                        <p className="subitem_p" >Remove menus from stores incase items no longer available</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">


                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Update Menus</h3>
                                                        <p className="subitem_p" >Modify prices and, discounts etc</p>


                                                    </div>

                                                </div>
                                            </li>


                                        </ul>


                                    </div>



                                    <div className="tutorialRow">





                                        <div className="tutorial_item_header">

                                            <img className="tutotial_item_icon" src={tutorial_logo}></img>

                                            <h4 className="tutorialtitle">Store management</h4>


                                        </div>



                                        <ul className="solution-links">

                                            <li>
                                                <div className="subitemcontainer">

                                                    <img className="tutotial_item_hearder_pic" src={store_img}></img>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">

                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Online & Offline</h3>
                                                        <p className="subitem_p" >Set your stores weekend off days</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">



                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Busy Mode</h3>
                                                        <p className="subitem_p" >Set your store incase customer limit is overloaded</p>


                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="subitemcontainer">


                                                    <div className="subconatiner_subheader">

                                                        <h3 className="subitem">Modification</h3>
                                                        <p className="subitem_p" >Update store details as per as you need</p>


                                                    </div>

                                                </div>
                                            </li>


                                        </ul>


                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>




                </div>

               

            </div>


            <div className={isDrawerOpen ? "sidebar":"sidebar_close" }>

                <div className="mobilediv"></div>

                <ul>


                    <li className="mobile_item">
                        <div className="mobile_item_group">

                            <h1 >Integrations</h1>

                            <img className="navicon_mobile" src={next}></img>

                        </div>
                    </li>


                    <li className="mobile_item">
                        <div className="mobile_item_group">

                            <h1 >Subscription</h1>

                            <img className="navicon_mobile" src={next}></img>

                        </div>
                    </li>


                    <li className="mobile_item">
                        <div className="mobile_item_group">

                            <h1 >Resources</h1>

                            <img className="navicon_mobile" src={next}></img>

                        </div>
                    </li>

                    <li className="mobile_item">
                        <div className="mobile_item_group">

                            <h1 >Tutotials</h1>

                            <img className="navicon_mobile" src={next}></img>

                        </div>
                    </li>


                    <li className="mobile_item">

                        <button className="signin_mobile">Sign in</button>

                    </li>

                </ul>

               

            </div>

           
            

            <button className="signin">Sign in</button>

            <img onClick={toggleDrawer} className="menu-icon" src={isDrawerOpen ? cross : menu}></img>


            

        </nav>
    )

}

export default Navbar