
import "./stat.css";
import image from "../../assets/carousel/header_pic.png";


const Stat = () => {
    return (

        <div>


            <div className="stats-section">
                <div className="stat-item">
                    <h2 className="stat-number">600M+</h2>
                    <h3 className="stat-title">Total Orders</h3>
                    <p className="stat-description">Over 600+ Million orders received since our journey started</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">50+</h2>
                    <h3 className="stat-title">Locations</h3>
                    <p className="stat-description">Available in different locations to provide quick custom services</p>
                </div>
                <div className="stat-item">
                    <h2 className="stat-number">10+</h2>
                    <h3 className="stat-title">Countries</h3>
                    <p className="stat-description">Over 600+ Million orders received since our journey started</p>
                </div>
            </div>



        </div>
        
    );
};

export default Stat;