import React, { useState } from "react";
import Basket from "./Basket";
import { Loader } from "../../components/UIKit";

const BasketContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Basket {...props} />;
};

export default BasketContainer;
