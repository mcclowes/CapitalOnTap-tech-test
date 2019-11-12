import React from "react";
import PropTypes from "prop-types";
import { Text } from "../UIKit";

const Product = props => {
  const { product } = props;

  const {
    author,
    description,
    id,
    isbn,
    price,
    stockAmount,
    thumbnail,
    title
  } = product;

  return (
    <div>
      <img src={thumbnail} />
      {/* <div>{author}</div> */}
      <div>
        <Text.Header>{title}</Text.Header>

        <Text>{description}</Text>

        <Text>{id}</Text>

        <Text>{isbn}</Text>

        <Text>{price}</Text>

        <Text>{stockAmount}</Text>
      </div>
    </div>
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
