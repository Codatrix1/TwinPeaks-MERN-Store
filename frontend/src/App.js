import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

//-----------------
// React Component
//-----------------
const App = function () {
  return (
    <Router>
      <Header />

      <main>
        <Container className="py-3">
          <Route path="/login" component={LoginScreen} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
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
