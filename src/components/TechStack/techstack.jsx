import React from "react";
import "./techstack.css"; // Import the CSS file for styling
import image from "../../assets/tech.jpg"

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            {/* Left Side - Image Content */}
            <div className="image-container">
                <img
                    src={image}
                    alt="Tech Stack"
                    className="tech-image"
                />
            </div>

            {/* Right Side - Card Content */}
            <div className="cards-container">
                <div className="card">
                    <h3>Expand your existing tech stack</h3>
                    <p>
                        Our integrations automate and enhance the tools already in use, including POS systems, delivery apps, fulfillment, KDS, and more.
                    </p>
                </div>
                <div className="card">
                    <h3>Future-proofed</h3>
                    <p>
                        Every system, platform, and app you’ll need is already connected to our ecosystem for you to use.
                    </p>
                </div>
                <div className="card">
                    <h3>Unrivaled support</h3>
                    <p>
                        Our technical team is on-call 24/7, so you’re never alone, especially when it matters most.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
