import React, { useState } from "react";
import Product from "./Product";
import { Loader } from "../../components/UIKit";

const ProductContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Product {...props} />;
};

export default ProductContainer;
