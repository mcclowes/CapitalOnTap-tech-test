import About from "../views/About";
import Books from "../views/Books";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = props => {
  return (
    <Router>
      <Route exact path="/" component={Books} {...props} />

      <Route path="/about" component={About} {...props} />
    </Router>
  );
};

export default Routes;
