import React from "react";
import PropTypes from "prop-types";
import { Text } from "../UIKit";
import { Link } from "react-router-dom";

const ProductExcerpt = props => {
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

        <Link to={`/book/${id}`}>View more</Link>
      </div>
    </div>
  );
};

ProductExcerpt.propTypes = {
  author: PropTypes.any,
  description: PropTypes.any,
  id: PropTypes.any,
  isbn: PropTypes.any,
  price: PropTypes.any,
  stockAmount: PropTypes.any,
  thumbnail: PropTypes.any,
  title: PropTypes.any
};

export default ProductExcerpt;
