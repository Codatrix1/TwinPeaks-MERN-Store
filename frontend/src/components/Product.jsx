import React from "react";
import { Card } from "react-bootstrap";

import Rating from "./Rating";

//------------------
// React Component
//------------------
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Card image */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" alt="pic" />
      </a>

      {/* Card body */}
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
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
