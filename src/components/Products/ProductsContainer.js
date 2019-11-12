import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Loader } from "../../components/UIKit";
import { getVisibleProducts } from "../../store/reducers/products";
import { connect } from "react-redux";

const ProductsContainer = props => {
  const { products } = props;

  return products.length ? <Products products={products} /> : <Loader />;
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(mapStateToProps)(ProductsContainer);
