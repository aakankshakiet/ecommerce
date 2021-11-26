import React  from 'react';
import useInput from '../CustomHook/useInput';
import { isName } from './ShippingDetails';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const isCreditCardNumber = (value) => value.match(/^[0-9]+$/) && value.trim().length === 16;
const isCreditCardCVV = (value) => value.match(/^[0-9]+$/) && value.trim().length === 3;

const Payment = (props) => {  
    
   


    const {
        value: NameOnCreditCard,
        isValid: NameOnCreditCardIsValid,
        hasError: NameOnCreditCardHasError,
        valueChangeHandler: NameOnCreditCardChangeHandler,
        inputBlurHandler: NameOnCreditCardBlurHandler
    } = useInput(isName);
    const {
        value: creditCardNumber,
        isValid: creditCardNumberIsValid,
        hasError: creditCardNumberHasError,
        valueChangeHandler: creditCardNumberChangeHandler,
        inputBlurHandler: creditCardNumberBlurHandler
    } = useInput(isCreditCardNumber);
    const {
        value: creditCardExpiry,
        isValid: creditCardExpiryIsValid,
        hasError: creditCardExpiryHasError,
        valueChangeHandler: creditCardExpiryChangeHandler,
        inputBlurHandler: creditCardExpiryBlurHandler
    } = useInput(isName);
    const {
        value: creditCardCVV,
        isValid: creditCardCVVIsValid,
        hasError: creditCardCVVHasError,
        valueChangeHandler: creditCardCVVChangeHandler,
        inputBlurHandler: creditCardCVVBlurHandler
    } = useInput(isCreditCardCVV);

    let formIsValid = false;
    if (NameOnCreditCardIsValid && creditCardNumberIsValid && creditCardExpiryIsValid && creditCardCVVIsValid) {
        formIsValid = true;
    }


    const confirmOrderHandler = async (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
       
        props.onConfirmOrder(
            {
                name:NameOnCreditCard
            }
        )
    }

    


    return (
        <>
            <Form onSubmit={confirmOrderHandler}>
                <h3>Payment</h3>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Name on Card" >
                            <Form.Control placeholder="Name" value={NameOnCreditCard}
                                onChange={NameOnCreditCardChangeHandler}
                                onBlur={NameOnCreditCardBlurHandler} />
                        </FloatingLabel>
                        {NameOnCreditCardHasError && <p>Please enter a valid Name(minimum 3 character).</p>}
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Card Number">
                            <Form.Control type="number" placeholder="Card Number" value={creditCardNumber}
                                onChange={creditCardNumberChangeHandler}
                                onBlur={creditCardNumberBlurHandler} />
                        </FloatingLabel>
                        {creditCardNumberHasError && <p>Please enter a Valid Credit Card Number(16 Digit)</p>}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Expiry date" >
                            <Form.Control placeholder="Expiry Date" value={creditCardExpiry}
                                onChange={creditCardExpiryChangeHandler}
                                onBlur={creditCardExpiryBlurHandler} />
                        </FloatingLabel>
                        {creditCardExpiryHasError && <p>Please enter a valid Expiry Date</p>}
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="CVV">
                            <Form.Control type="number" placeholder="CVV" value={creditCardCVV}
                                onChange={creditCardCVVChangeHandler}
                                onBlur={creditCardCVVBlurHandler} />
                        </FloatingLabel>
                        {creditCardCVVHasError && <p>Please enter a Valid CVV(3 Digit).</p>}
                    </Col>
                </Row>
                <Button type="submit" disabled={!formIsValid}>Confirm Order</Button>
            </Form>
            
        </>
    )
};
export default Payment;