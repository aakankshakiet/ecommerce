import './cartItem.scss';
import { Col, Row, Image,Button} from "react-bootstrap";

const CartItem = (props) => {
    
    return (
        <>
            <section className="cart_item_section">
                    <Row>
                        <Col md={4} className="d-flex justify-content-center">
                            <Image src={props.main_image} alt="product item1" className="cart_item_image" fluid />
                        </Col>
                        <Col md={5}>
                            <h5>{props.title}</h5>
                            <p>Mollit ullamco do veniam est laborum id commodo.</p>
                            <p>{props.price}</p>
                        </Col>
                        <Col md={3}>
                            <div>
                                <span>Items:</span>
                                <span>{props.amount}</span>
                            </div>
                            <Button  className="button" onClick={props.onRemove}>-</Button>
                            <Button  onClick={props.onAdd}>+</Button>
                        </Col>
                    </Row>
            </section>

        </>

    )
};
export default CartItem;