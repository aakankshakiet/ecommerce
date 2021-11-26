import React from 'react';
import './cartItem.scss';
import { Col, Row, Image,Button} from "react-bootstrap";

const CartItem = (props) => {
    
    return (
        <>
            <section className="cart_item_section">
                    <Row>
                        <Col md={4} className="d-flex justify-content-center mt-2 mb-2">
                            <Image src={props.main_image} alt="product item1" className="cart_item_image" fluid />
                        </Col>
                        <Col md={5}>
                            <h5 className="title">{props.title}</h5>
                            <p className="price">	&#8377;{props.price}</p>
                        </Col>
                        <Col md={3}>
                            <div>
                                <span className="items">Items : </span>
                                <span className="items">{props.amount}</span>
                            </div>
                            <Button  className="button" onClick={props.onRemove}>-</Button>
                            <Button className="button"  onClick={props.onAdd}>+</Button>
                        </Col>
                    </Row>
            </section>

        </>

    )
};
export default CartItem;