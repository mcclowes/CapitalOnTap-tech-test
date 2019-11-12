import Dumb from "../Dumb";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
  };

  return shallow(<Dumb {...props} />);
};

let wrapper;

describe("Dumb", () => {
  it("renders component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
