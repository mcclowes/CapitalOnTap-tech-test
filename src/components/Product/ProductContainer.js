import React, { useState } from "react";
import Product from "./Product";
import { Loader } from "../../components/UIKit";
import { getVisibleProducts } from "../../store/reducers/products";
import { connect } from "react-redux";

const ProductContainer = props => {
  console.log(props);
  const { id, products } = props;

  const product = products.filter(product => product.id === id)[0];

  const addProductToBasket = () => {
    console.log("Adding to basket");
  };

  return product ? (
    <Product addProductToBasket={addProductToBasket} product={product} />
  ) : (
    <Loader />
  );
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(mapStateToProps)(ProductContainer);
