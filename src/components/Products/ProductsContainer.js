import React, { useState } from "react";
import Products from "./Products";
import { Loader } from "../../components/UIKit";

const ProductsContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Products {...props} />;
};

export default ProductsContainer;
