import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// import components
import FormContainer from "../components/FormContainer";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";

//------------------
// React Component
//------------------
const ShippingScreen = ({ history }) => {
  // useSelector to get the shipping address state values from the cart reducer
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // setting the initial state as per data from the localStorage if present
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  // useDispatch
  const dispatch = useDispatch();

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    // DISPTACH SAVE SHIPPING ADDRESS
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        {/* Address Field*/}
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        {/* City Field*/}
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>

        {/* Postal Code Field*/}
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>

        {/* Country Field*/}
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
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
export default ShippingScreen;
