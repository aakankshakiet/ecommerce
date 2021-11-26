import React, { useState,useEffect ,useContext} from "react";
import CartContext from "../../store/CartContext";
import {Link,useParams} from 'react-router-dom';
import useHttp from "../CustomHook/useHttp";
import { getSingleProduct } from "../api";
import './productDetails.scss';
import { Container, Row, Col, Carousel, Button,Image } from "react-bootstrap";

const ProductDetails = () => {
    const [index, setIndex] = useState(0);
    const cartCtx=useContext(CartContext);
    
    const params=useParams();
    const { productId } =params;
    

    const addToCartHandler = () => {
        cartCtx.addItem({
          id: loadedProduct.id,
          title: loadedProduct.title,
          amount: 1,
          price: loadedProduct.price,
          main_image:loadedProduct.image.main_img
        });
      };

    const { sendRequest, status, data: loadedProduct, error } = useHttp(
        getSingleProduct,
        true
      );
    
      useEffect(() => {
        sendRequest(productId);
      }, [sendRequest, productId]);
    
      if (status === 'pending') {
        return (
          <div>
            <p>pending</p>
          </div>
        );
      }
    
      if (error) {
        return <p >{error}</p>;
      }
    
      if (!loadedProduct.title) {
        return <p>No product found!</p>;
      }
    
  
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <>  
            <section className="product_details_section">
                <Container>
                    <Row>
                        <Col xm={6} className="d-flex flex-column justify-content-center align-items-center">
                            <Image className="title_image " src={loadedProduct.image.main_img} alt="product_image" fluid />
                            <Row>
                                <Col>
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <Row className="thumbnail_images">
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image src={loadedProduct.image.thumbnail1} alt="Product Image 1" thumbnail />
                                                    </Link>
                                                </Col>
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image  src={loadedProduct.image.thumbnail2} alt="Product Image 2" thumbnail />
                                                    </Link>
                                                </Col>
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image  src={loadedProduct.image.thumbnail3} alt="Product Image 3" thumbnail />
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Row className="thumbnail_images">
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image  src={loadedProduct.image.thumbnail4} alt="Product Image 4" thumbnail />
                                                    </Link>
                                                </Col>
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image src={loadedProduct.image.thumbnail5} alt="Product Image 5" thumbnail />
                                                    </Link>
                                                </Col>
                                                <Col sm={4} className="d-flex align-items-center">
                                                    <Link to="#">
                                                        <Image src={loadedProduct.image.main_img} alt="Product Image 6" thumbnail />
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <h3 className="heading">{loadedProduct.title}</h3>
                            <p className="price"><span>Price : </span><span> &#8377;{loadedProduct.price}</span></p>
                            <p className="description_heading">Description : </p>
                            <p className="desciption">{loadedProduct.description}</p>
                            <Button type="submit" className="button" onClick={addToCartHandler} >Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};
export default ProductDetails;