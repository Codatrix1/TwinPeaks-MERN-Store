import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

// import components
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

//-----------------
// React Component
//-----------------
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // useEffect
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        {/* Email Field*/}
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* Password Field*/}
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* Sign In Button Field*/}
        <Button
          type="submit"
          variant="primary"
          className="btn-block"
          style={{ marginTop: "12px" }}
        >
          Sign In
        </Button>
      </Form>
      {/* New Customer Register Field*/}
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

//----------------
// Export Default
//----------------
export default LoginScreen;
