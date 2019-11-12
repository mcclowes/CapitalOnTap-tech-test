import React from "react";
import PropTypes from "prop-types";
import { Text, Button } from "../UIKit";
import { ProductWrapper, ProductInformation } from "./csx";

const Product = props => {
  const { addProductToBasket, product } = props;

  const {
    author,
    description,
    isbn,
    price,
    stockAmount,
    thumbnail,
    title
  } = product;

  const outOfStock = stockAmount <= 0;

  return (
    <ProductWrapper>
      <img src={thumbnail} />

      <ProductInformation>
        <Text.Header>{title}</Text.Header>

        <Text>
          {author.firstName} {author.lastName}
        </Text>

        <Text>{description}</Text>

        <Text>ISBN: {isbn}</Text>

        <Text>£{price.toFixed(2)}</Text>

        {outOfStock ? (
          <Text>Out of stock</Text>
        ) : (
          <Text>{stockAmount} left in stock</Text>
        )}

        <Button disabled={outOfStock} doClick={addProductToBasket}>
          Add to basket
        </Button>
      </ProductInformation>
    </ProductWrapper>
  );
};

Product.propTypes = {
  author: PropTypes.any,
  description: PropTypes.any,
  id: PropTypes.any,
  isbn: PropTypes.any,
  price: PropTypes.any,
  stockAmount: PropTypes.any,
  thumbnail: PropTypes.any,
  title: PropTypes.any
};

export default Product;
