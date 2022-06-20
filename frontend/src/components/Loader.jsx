import React from "react";
import { Spinner } from "react-bootstrap";

//-----------------
// React Component
//------------------
const Loader = () => {
  return (
    <React.Fragment>
      <Spinner
        animation="grow"
        variant="dark"
        role="status"
        style={{
          width: "75px",
          height: "75px",
          margin: "auto",
          display: "block",
        }}
      />
    </React.Fragment>
  );
};

//-----------------
// Default Export
//------------------
export default Loader;
