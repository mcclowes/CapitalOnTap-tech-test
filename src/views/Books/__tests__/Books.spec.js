import Books from "../Books";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
  };

  return shallow(<Books {...props} />);
};

let wrapper;

it("renders component", () => {
  wrapper = renderComponent();

  expect(wrapper).toMatchSnapshot();
});
