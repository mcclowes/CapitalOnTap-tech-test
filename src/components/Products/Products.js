import React from "react";
import ProductExcerpt from "../ProductExcerpt";

const Products = props => {
  const { products } = props;

  return (
    <div>
      {products.map((product, i) => (
        <ProductExcerpt key={i} product={product} />
      ))}
    </div>
  );
};

export default Products;
