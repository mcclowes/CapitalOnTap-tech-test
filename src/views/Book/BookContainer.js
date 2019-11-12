import React, { useState } from "react";
import Book from "./Book";
import { Loader } from "../../components/UIKit";

const BookContainer = props => {
  const { match } = props;

  return <Book bookId={match && match.params.book} />;
};

export default BookContainer;
