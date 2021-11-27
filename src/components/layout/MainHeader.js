import React,{useContext} from 'react';
import CartContext from '../../store/CartContext';
import { Container, Navbar, Nav} from 'react-bootstrap';
import {FaCartArrowDown} from 'react-icons/fa';
import  './mainHeader.scss';
import { Link } from 'react-router-dom';
const MainHeader = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);


  return (
    <>
      <Navbar  expand="lg" sticky="top" className="main_nav" >
        <Container  >
          <Link to="/" className="main_logo">
            <img src="logo.png" alt="logo_image"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto"  >
              <Link to="/" className="nav-link">Home</Link>
              <Link to="#" className="nav-link">About</Link>
              <Link to="#" className="nav-link">Shop</Link>
            </Nav>
          </Navbar.Collapse>
            <Link to="/cart" className="cart_button">
              <span className="cart_icon"><FaCartArrowDown/></span>
              <span>Your Cart</span>
              <span className="cart_badge">{numberOfCartItems}</span>
            </Link>
        </Container>
      </Navbar>

    </>
  )
};
export default MainHeader;