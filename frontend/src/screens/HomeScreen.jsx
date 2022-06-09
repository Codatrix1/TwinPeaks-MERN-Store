import React from "react";
import { Row, Col } from "react-bootstrap";

// Temp data source
import products from "../products";

import Product from "../components/Product";

//--------------
// React Component
//--------------
const HomeScreen = () => {
  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

//-------------------
// Default Export
//-------------------
export default HomeScreen;
