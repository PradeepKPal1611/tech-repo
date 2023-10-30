import React from "react";

import img from '../assets/images/Image3.jpeg';

import '../assets/css/Hero.css';

function Hero() {
    return(
        <div className="hero-container">
            <img alt="HeroImg" src={img} />
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing content and services.</p>
            <button>Get Started</button>
        </div>
    );
}
export default Hero;