import react from "react";
import "./Hero.css";

function Hero(props) {

    return (
        <section id="home" className="hero-section">
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <button className="hero-button" onClick={props.onActionClick}>
                    {props.buttonText}
                </button>
            </div>
            <div className="hero-image-wrapper">
                <img
                    src={props.imageUrl}
                    alt="Hero Banner"
                    className="hero-image"
                />
            </div>
        </section>
    );
}

export default Hero;