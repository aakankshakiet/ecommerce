import React, { useState } from "react";
import AvailableProducts from '../Products/AvailableProducts';
import { Carousel } from 'react-bootstrap';
import './home.scss';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 banner_img "
            src="banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="banner_caption">
            <h3>Experience the Best</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner_img"
            src="bannerslide2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="banner_caption">
            <h3>All brands with one roof</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner_img"
            src="bannerslide3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="banner_caption">
            <h3>We simplify your needs</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <AvailableProducts />
    </>
  );


};
export default Home;