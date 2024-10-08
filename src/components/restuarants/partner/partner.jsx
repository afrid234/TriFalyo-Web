﻿import React from "react";
import "./partner.css"; // Import the CSS file
import image from "../../../assets/partner.png";

const PartnerRestaurants = () => {
    return (

        <div>

            <div className="partner-restaurants">
                {/* Left Side - Text Content */}
                <div className="text-content">
                    <h3 className="title">PARTNER RESTAURANTS</h3>
                    <h2 className="subtitle">Simplify operations with smart order management</h2>
                    <ul className="features">
                        <li>✔ Realtime order updates and notifications</li>
                        <li>✔ Orders analysis</li>
                        <li>✔ Invoice</li>
                    </ul>
                </div>

                {/* Right Side - Image Content */}
                <div className="image-content">
                    <img
                        src={image}
                        alt="Order Management System"
                        className="restaurant-image"
                    />
                    {/* Overlay or additional UI components can be placed on top of the image */}

                </div>
            </div>


            <div className="partner-restaurants_mobile">

                {/* Right Side - Image Content */}
                <div className="image-content">
                    <img
                        src={image}
                        alt="Order Management System"
                        className="restaurant-image"
                    />
                    {/* Overlay or additional UI components can be placed on top of the image */}

                </div>


                {/* Left Side - Text Content */}
                <div className="text-content">
                    <h3 className="title">PARTNER RESTAURANTS</h3>
                    <h2 className="subtitle">Simplify operations with smart order management</h2>
                    <ul className="features">
                        <li>✔ Realtime order updates and notifications</li>
                        <li>✔ Orders analysis</li>
                        <li>✔ Invoice</li>
                    </ul>
                </div>

               
            </div>

        </div>
       


    );
};

export default PartnerRestaurants;