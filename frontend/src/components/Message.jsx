import React from "react";
import { Alert } from "react-bootstrap";

//-----------------
// React Component
//------------------
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

//-----------------
// Default props
//------------------
Message.defaultProps = {
  variant: "info",
};

//-----------------
// Export Default
//------------------
export default Message;
