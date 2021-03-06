import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

// import components
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

//--------------
// React Component
//--------------
const HomeScreen = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // useSelector
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  return (
    <React.Fragment>
      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

//-------------------
// Default Export
//-------------------
export default HomeScreen;
