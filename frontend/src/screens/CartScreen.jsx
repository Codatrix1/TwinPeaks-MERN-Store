import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

// import components
import Message from "../components/Message";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

//-----------------
// React Component
//-----------------
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  // location.search gives us whatever there is after the id number params for example --> ?qty=1
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  // useDispatch
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  // useSelector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return <div>Cart Screen</div>;
};

//-----------------
// Default Export
//-----------------
export default CartScreen;
