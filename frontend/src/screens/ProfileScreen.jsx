import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

// import components
import Message from "../components/Message";
import Loader from "../components/Loader";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

//-----------------
// React Component
//-----------------
const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [profileUpdated, setProfileUpdated] = useState(null);

  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  // useSelector: To check if a user is logged in, only then display this page
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // useSelector: To get the update success value
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  // useEffect
  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/login");
  //   } else {
  //     if (!user || !user.name || success) {
  //       dispatch({ type: USER_UPDATE_PROFILE_RESET });
  //       dispatch(getUserDetails("profile"));
  //     } else {
  //       setName(user.name);
  //       setEmail(user.email);
  //     }
  //   }
  // }, [dispatch, history, userInfo, user, success]);

  // useEffect
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
      return;
    }

    if (!user || !user.name) {
      dispatch(getUserDetails("profile"));
      return;
    }

    if (success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails("profile"));
      setProfileUpdated(true);
      return;
    }

    setName(user.name);
    setEmail(user.email);
  }, [dispatch, history, userInfo, user, success]);

  // Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    // get rid of previous messages
    setProfileUpdated(false);
    setMessage(null);

    // DISPATCH REGISTER: Conditionally
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // DISPATCH UPDATE PROFILE
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {profileUpdated && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
          {/* Name Field*/}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
          {/* Confirm Password Field*/}
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {/* Sign In Button Field*/}
          <Button
            type="submit"
            variant="primary"
            className="btn-block"
            style={{ marginTop: "12px" }}
          >
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

//----------------
// Export Default
//----------------
export default ProfileScreen;
