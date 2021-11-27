import React from "react";
import useInput from '../../../CustomHook/useInput';
import { isName, isPhone } from "../../../Cart/ShippingDetails";
import { Form, FloatingLabel} from "react-bootstrap";
import './addReviewForm.scss';
import Rating from "./Rating";

const isEmail = (value) => value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/);
const isNotEmpty = (value) => value.trim() !== '';
const AddReviewForm = (props) => {
    const {
        value: fullNameValue,
        isValid: fullNameIsValid,
        hasError: fullNameHasError,
        valueChangeHandler: fullNameChangeHandler,
        inputBlurHandler: fullNameBlurHandler
    } = useInput(isName);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = useInput(isEmail);
    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler
    } = useInput(isPhone);
    const {
        value: reviewValue,
        isValid: reviewIsValid,
        hasError: reviewHasError,
        valueChangeHandler: reviewChangeHandler,
        inputBlurHandler: reviewBlurHandler
    } = useInput(isNotEmpty);

    let formIsValid = false;
    if (fullNameIsValid && emailIsValid && phoneIsValid && reviewIsValid) {
        formIsValid = true;
    }


    const submitHandler = async (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        props.onDisplay({
            fullName: fullNameValue,
            emailValue,
            phoneValue,
            reviewValue
        })
    };

    return (
        <>
            <p className="mb-4">Your Rating :</p>
            <span>
                <Rating />
            </span>

            <Form onSubmit={submitHandler} >
                <FloatingLabel controlId="floatingInputName" label="Full Name" className="mb-2">
                    <Form.Control type="text" placeholder="Full Name"
                        value={fullNameValue}
                        onChange={fullNameChangeHandler}
                        onBlur={fullNameBlurHandler}
                    />
                </FloatingLabel>
                {fullNameHasError && <p className="error"> Please Enter a Valid Full Name</p>}
                <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-2" >
                    <Form.Control type="email" placeholder="Email Address"
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                </FloatingLabel>
                {emailHasError && <p className="error">Please Enter a Valid Email</p>}
                <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-2" >
                    <Form.Control type="number" placeholder="Phone Number"
                        value={phoneValue}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                    />
                </FloatingLabel>
                {phoneHasError && <p className="error">Please Enter a Valid Phone Number</p>}

                <FloatingLabel controlId="floatingTextarea" label="Review" className="mb-2">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a  review here"
                        value={reviewValue}
                        onChange={reviewChangeHandler}
                        onBlur={reviewBlurHandler}
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                {reviewHasError && <p className="error">Please Enter a Valid Review</p>}
                <button type="submit" className="btn mt-4" disabled={!formIsValid}>Submit Review</button>
            </Form>
        </>
    );
};
export default AddReviewForm;