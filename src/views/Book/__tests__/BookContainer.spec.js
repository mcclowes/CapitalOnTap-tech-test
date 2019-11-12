import BookContainer from "../BookContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<BookContainer />);

  expect(wrapper).toMatchSnapshot();
});
