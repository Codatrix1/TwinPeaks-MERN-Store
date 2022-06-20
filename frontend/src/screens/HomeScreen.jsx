import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

// import component
import Product from "../components/Product";

//--------------
// React Component
//--------------
const HomeScreen = () => {
  // useDispatch
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h1>Latest Products</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
