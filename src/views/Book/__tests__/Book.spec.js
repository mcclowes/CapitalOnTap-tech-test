import Book from "../Book";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
  };

  return shallow(<Book {...props} />);
};

let wrapper;

it("renders component", () => {
  wrapper = renderComponent();

  expect(wrapper).toMatchSnapshot();
});
