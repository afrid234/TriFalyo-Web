
import "./header.css";
import image from "../../assets/carousel/header_pic.png";


const Header = () => {
    return (

        <div className="slidercontainer">

            <img className="carosoul" src={image} alt=""></img>
            <button className="overlay-button">Get Started</button>

        </div>
       
    );
};

export default Header;
