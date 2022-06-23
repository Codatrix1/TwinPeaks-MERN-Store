import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

//-----------------
// React Component
//-----------------
const Header = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // logoutHandler
  const logoutHandler = () => {
    dispatch(logout());
  };

  // useHistory
  let history = useHistory();
  const takeToProfile = () => {
    history.push("/profile");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand style={{ marginLeft: "1rem" }} as={Link} to="/">
            TwinPeaks
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/cart">
                {" "}
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item onClick={takeToProfile}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

//----------------
// Default Export
//----------------
export default Header;
