import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';



const Cart = () => {
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ShoppingCart/>
          </Col>
          
        </Row>
      </Container>
    </>
  )
};
export default Cart;