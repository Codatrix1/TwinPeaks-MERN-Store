import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//-------------
// React Component
//-------------
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            2022 Developed by &copy; Codatrix
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

//---------------
// Default Export
//---------------
export default Footer;
