import BooksContainer from "../BooksContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<BooksContainer />);

  expect(wrapper).toMatchSnapshot();
});
