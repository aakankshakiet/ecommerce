import React from 'react';
import ShoppingCart from './ShoppingCart';
import './cart.scss';
import { Container, Row, Col } from 'react-bootstrap';



const Cart = () => {
  
  return (
    <>
      <section className="cart_section">
        <Container>
          <Row>
            <Col>
              <ShoppingCart />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
};
export default Cart;