import React from "react";
import { Card } from "react-bootstrap";

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
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3">
          <div>${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

//----------------
// Default Export
//----------------
export default Product;
