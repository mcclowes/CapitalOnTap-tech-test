import React, { useState } from "react";
import ProductExcerpt from "./ProductExcerpt";
import { Loader } from "../../components/UIKit";

const ProductExcerptContainer = props => {
  console.log(props);
  return <ProductExcerpt {...props} />;
};

export default ProductExcerptContainer;
