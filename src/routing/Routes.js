import About from "../views/About";
import Books from "../views/Books";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Books} />

      <Route path="/about" component={About} />
    </Router>
  );
};

export default Routes;
