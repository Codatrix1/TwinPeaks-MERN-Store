import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

// import components
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";

//------------------
// React Component
//------------------
const PaymentScreen = ({ history }) => {
  // useSelector to get the shipping address state values from the cart reducer
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // Redirect to shipping screen if shipping address is not present
  if (!shippingAddress) {
    history.push("/shipping");
  }

  // useState with default payment method
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  // useDispatch
  const dispatch = useDispatch();

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    // DISPTACH SAVE PAYMENT METHOD AND PUSH TO PLACE ORDER SCREEN
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        {/* Radio Button Form Group*/}
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            {/* PayPal or Credit Card Payment Method*/}
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            />

            {/* UPI Payment Method*/}
            {/*<Form.Check
              type="radio"
              label="UPI/BHIM"
              id="UPI"
              name="paymentMethod"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />*/}
          </Col>
        </Form.Group>

        {/* Continue Button Field*/}
        <Button
          type="submit"
          variant="primary"
          className="btn-block"
          style={{ marginTop: "12px" }}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

//----------------
// Default Export
//----------------
export default PaymentScreen;
