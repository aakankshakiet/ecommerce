import React, { useState,useContext } from "react";
import CartContext from "../../store/CartContext";
import './shippingDetails.scss';
import { Form, Row, Col, FloatingLabel, Button ,Image} from "react-bootstrap";
import Payment from "./Payment";
import useInput from "../CustomHook/useInput";
import Summary from "./Summary";


//const isNotEmpty = (value) => value.trim() !== '';
export const isName = (value) => value.match(/^[a-zA-Z, .'-]+$/) && value.trim().length > 2;
const isAddress = (value) => value.trim().length > 10;
const isCity = (value) => value.match(/^[a-zA-Z]+$/);
const isZip = (value) => value.match(/^[0-9]+$/) && value.trim().length === 6;
const isPhone = (value) => value.match(/^[0-9]+$/) && value.trim().length === 10;

const ShippingAddress = () => {
    const [isFormComplete, setIsFormComplete] = useState(false);
    const cartCtx=useContext(CartContext);

    

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler
    } = useInput(isName);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler
    } = useInput(isName);
    const {
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler
    } = useInput(isAddress);
    const {
        value: landmarkValue,
        isValid: landmarkIsValid,
        hasError: landmarkHasError,
        valueChangeHandler: landmarkChangeHandler,
        inputBlurHandler: landmarkBlurHandler
    } = useInput(isAddress);
    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler
    } = useInput(isCity);
    const {
        value: zipCodeValue,
        isValid: zipCodeIsValid,
        hasError: zipCodeHasError,
        valueChangeHandler: zipCodeChangeHandler,
        inputBlurHandler: zipCodeBlurHandler
    } = useInput(isZip);
    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler
    } = useInput(isPhone);


    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid &&
        addressIsValid && landmarkIsValid
        && cityIsValid && zipCodeIsValid
        && phoneIsValid) {
        formIsValid = true;
    }


    const onDetailsComplete = () => {
        setIsFormComplete(true);
    }
    const confirmOrderHandler=async(userData)=>{
        await fetch('https://ab-company-a828d-default-rtdb.firebaseio.com/Order.json',{
            method:'POST',
            body:JSON.stringify({
              user:{userData,firstNameValue},
              orderedItems:cartCtx.items
            })
            
          });
          
          cartCtx.clearCart();
        }

    const onConfirmShippingDetails = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }
    };

   

    return (
        <>  <Row>
            <Col md={8}>

            {!isFormComplete && <Form onSubmit={onConfirmShippingDetails}>
                <h3>Shipping Details</h3>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="First Name*" >
                            <Form.Control type="input" placeholder="First Name"
                                value={firstNameValue}
                                onChange={firstNameChangeHandler}
                                onBlur={firstNameBlurHandler} />
                        </FloatingLabel>
                        {firstNameHasError && <p>Please enter a Valid First Name(minimum 3 character).</p>}
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Last Name*">
                            <Form.Control type="input" placeholder="Last Name"
                                value={lastNameValue}
                                onChange={lastNameChangeHandler}
                                onBlur={lastNameBlurHandler} />
                        </FloatingLabel>
                        {lastNameHasError && <p>Please enter a valid last name.</p>}
                    </Col>
                </Row>
                <Row >
                    <Col sm={12} className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Address*" >
                            <Form.Control type="input" placeholder="Address"
                                value={addressValue}
                                onChange={addressChangeHandler}
                                onBlur={addressBlurHandler} />
                        </FloatingLabel>
                        {addressHasError && <p>Please enter a valid address(minimum 10 character).</p>}
                    </Col>
                    <Col sm={12} className="mb-3">
                        <FloatingLabel controlId="floatingInput" label="Nearest Landmark*" >
                            <Form.Control type="input" placeholder="Address Line 2"
                                value={landmarkValue}
                                onChange={landmarkChangeHandler}
                                onBlur={landmarkBlurHandler} />
                        </FloatingLabel>
                        {landmarkHasError && <p>Please enter a valid landmark(minimum 10 character).</p>}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="State" >
                            <Form.Control type="input" placeholder="State" />
                        </FloatingLabel>

                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="City*">
                            <Form.Control type="input" placeholder="City"
                                value={cityValue}
                                onChange={cityChangeHandler}
                                onBlur={cityBlurHandler} />
                        </FloatingLabel>
                        {cityHasError && <p>Please enter a valid City Name.</p>}
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Zip/Postal Code*" >
                            <Form.Control type="number" placeholder="Zip/Postal Code"
                                value={zipCodeValue}
                                onChange={zipCodeChangeHandler}
                                onBlur={zipCodeBlurHandler} />
                        </FloatingLabel>
                        {zipCodeHasError && <p>Please enter a valid zip code(6 Digit).</p>}
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Phone Number*">
                            <Form.Control type="number" placeholder="Phone Number"
                                value={phoneValue}
                                onChange={phoneChangeHandler}
                                onBlur={phoneBlurHandler} />
                        </FloatingLabel>
                        {phoneHasError && <p>Please enter a valid phone number(10 Digit).</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Check
                            type="radio"
                            label="Free Shipping"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            defaultChecked />
                    </Col>
                    <Col sm={6}>
                        <Form.Check
                            type="radio"
                            label="Next Day Delivery -&#8377;20"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Row>
                <Button type="submit"  disabled={!formIsValid} onClick={onDetailsComplete}>Payment-{`>`}</Button>
            </Form>}
            {isFormComplete && <Payment  onConfirmOrder={confirmOrderHandler} />}
            </Col>
            <Col md={4}>
                <Summary >
                    {cartCtx.items.map(item=>(
                        <Row >
                            <Col sm={6} className="summary_item_image">
                                <Image src={item.main_image} alt="item image" fluid/>
                            </Col>
                            <Col sm={6}>
                            <div>{item.title}</div>
                            <div>&#8377;{item.price}</div>
                            </Col>
                        </Row>
                    ))}
                </Summary>
            </Col>
        </Row>
        </>
    )
};
export default ShippingAddress;