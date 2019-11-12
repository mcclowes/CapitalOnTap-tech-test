import Nav from "../Nav";
import React from "react";
import Products from "../../components/Products";
import { Page, PageWrapper } from "./csx";
import { Text } from "../../components/UIKit";

const Books = props => {
  return (
    <>
      <Nav />

      <PageWrapper>
        <Page>
          <Products />
        </Page>
      </PageWrapper>
    </>
  );
};

export default Books;
