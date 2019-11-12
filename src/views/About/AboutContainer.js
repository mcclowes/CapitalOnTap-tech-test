import React, { useState } from "react";
import About from "./About";
import { Loader } from "../../components/UIKit";

const AboutContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <About {...props} />;
};

export default AboutContainer;
