import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Hero.css';
<<<<<<< HEAD
import Image1 from '../assets/images/Image1.jpeg';
import Image2 from '../assets/images/Image2.jpeg';
import Image3 from '../assets/images/Image3.jpeg';
=======
>>>>>>> 5a33c0c065c913f8ada62819412fb34e77c293ac

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide</h5>
          <p>The best way to predict the future is to invent it</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}   
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide</h5>
          <p>The best and most beautiful things in the world cannot be seen or even touched -
             they must be felt with the heart.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3} 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide</h5>
          <p>
          The only way to do great work is to love what you do.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;