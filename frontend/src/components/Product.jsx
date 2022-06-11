import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Rating from "./Rating";

//------------------
// React Component
//------------------
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Product Image*/}
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" alt="pic" />
      </Link>

      {/* Card body */}
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          {/* Product Title*/}
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          {/* Product Rating & Review Component */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

//----------------
// Default Export
//----------------
export default Product;
