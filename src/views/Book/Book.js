import Nav from "../Nav";
import React from "react";
import Product from "../../components/Product";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";

const Book = props => {
  return (
    <>
      <Nav />

      <PageWrapper>
        <Page>
          <Product id={props.bookId} />
        </Page>
      </PageWrapper>
    </>
  );
};

export default Book;
