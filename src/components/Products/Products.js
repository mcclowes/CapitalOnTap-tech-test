import React from "react";
import Product from "../Product";

const Products = props => {
  const { products } = props;

  return (
    <div>
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
};

export default Products;
