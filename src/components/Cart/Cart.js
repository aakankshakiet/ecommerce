import React from 'react';
import ShoppingCart from './ShoppingCart';
import './cart.scss';
import { Container } from 'react-bootstrap';



const Cart = () => {
  
  return (
    <>
      <section className="cart_section">
        <Container>
              <ShoppingCart />
        </Container>
      </section>
    </>
  )
};
export default Cart;