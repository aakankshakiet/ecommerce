import  React,{ useState } from "react";
import {Carousel} from 'react-bootstrap';
import AvailableProducts from '../Products/AvailableProducts';
import './home.scss';
const Home=()=>{
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
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
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner_img"
                src="bannerslide3.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption className="banner_caption">
                <h3>Take the best one with the best price</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <AvailableProducts/>
          </>
        );
      
      
};
export default Home; 