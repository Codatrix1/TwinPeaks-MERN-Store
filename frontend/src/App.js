import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

//-----------------
// React Component
//-----------------
const App = function () {
  return (
    <React.Fragment>
      <Header />

      <Container>
        <main className="py-3">
          <h1>Welcome to TwinPeaks</h1>
        </main>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

//----------------
// Default Export
//----------------
export default App;
