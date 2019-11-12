import React, { useState } from "react";
import Books from "./Books";
import { Loader } from "../../components/UIKit";

const BooksContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Books {...props} />;
};

export default BooksContainer;
