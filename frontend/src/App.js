import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

//-----------------
// React Component
//-----------------
const App = function () {
  return (
    <Router>
      <Header />

      <main>
        <Container className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products/:id" component={ProductScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

//----------------
// Default Export
//----------------
export default App;
