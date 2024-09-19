import React from "react";
import "./menu.css"; // Import the CSS file
import image from "../../../assets/partner.png";

const Menu = () => {
    return (
        <div className="partner-restaurants">
            {/* Left Side - Text Content */}
            <div className="image-content">
                <img
                    src={image}
                    alt="Order Management System"
                    className="restaurant-image"
                />
                {/* Overlay or additional UI components can be placed on top of the image */}

            </div>

            {/* Right Side - Image Content */}

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
    );
};

export default Menu;