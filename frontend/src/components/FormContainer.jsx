import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//-----------------
// React Component
//-----------------
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

//----------------
// Default Export
//----------------
export default FormContainer;
