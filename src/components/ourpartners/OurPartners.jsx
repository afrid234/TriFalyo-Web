import React from "react";
import "./OurPartners.css"; // Import the CSS file for styling
import justeat from '../../assets/logo/justeat.png'
import uberat from '../../assets/logo/ubereat.png'
import deliveroo from '../../assets/logo/deliveroo.jpg'

const OurPartners = () => {
    return (
        <div className="partners-section">
            {/* Title */}
            <h2 className="partners-title">OUR PARTNERS</h2>

            {/* Subtitle */}
            <p className="partners-subtitle">
                +1,000 out-of-the-box integrations that operate at a 99% success rate
            </p>

            {/* Divider */}
            <hr className="divider" />

            {/* Partners Logos */}
            <div className="partners-logos">
                <img src={uberat} alt="Uber Eats" className="partner-logo" />
                <img src={deliveroo} alt="Deliveroo" className="partner-logo" />
                <img src={justeat} alt="Just Eat" className="partner-logo" />
            </div>

            {/* Divider */}
            <hr className="divider2" />

            {/* Button */}
            <button className="start-now-btn">Start now</button>
        </div>
    );
};

export default OurPartners;
