import React, {useState, useContext } from 'react';
import './shoppingCart.scss';
import CartItem from './CartItem';
import ShippingDetails from './ShippingDetails'
import CartContext from '../../store/CartContext';
import { Row, Col,Button} from 'react-bootstrap';
import Summary from './Summary';


const ShoppingCart=()=>{
    const [isShoppingDone,setIsShoppingDone]=useState(false);
    const cartCtx = useContext(CartContext);
    
    const hasItems = cartCtx.items.length > 0;
    console.log(hasItems);

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
    
    const cartItemAddHandler = (item) => {
      cartCtx.addItem(item);
    };
    const onShoppingDone=()=>{
      setIsShoppingDone(true);
    }
   
   
   
    return (
      <>
          {!isShoppingDone && 
          <>
          {hasItems && 
          <>
          <Row>
            <Col md={8}>
              <h3 className="heading">Shopping Cart</h3>
              {cartCtx.items.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  price={item.price}
                  main_image={item.main_image}
                  onRemove={()=>{cartItemRemoveHandler(null,item.id)}}
                  onAdd={cartItemAddHandler.bind(null, item)}
                />
              ))}
            </Col>
            <Col md={4}>
               <Summary/>
            </Col>
          </Row>
          {hasItems && <Button className="next_button" onClick={onShoppingDone}>Shipping-{`>`}</Button>}
          </>
          }
        </>
        }
        {!hasItems && <p>No Item Is Selected</p>}
        {isShoppingDone && <ShippingDetails/>}
      </>
    )
};
export default ShoppingCart;