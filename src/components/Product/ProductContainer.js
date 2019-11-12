import React, { useState } from "react";
import Product from "./Product";
import { Loader } from "../../components/UIKit";

const ProductContainer = props => {
  console.log(props);
  return <Product {...props} />;
};

export default ProductContainer;
