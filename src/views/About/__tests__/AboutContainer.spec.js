import AboutContainer from "../AboutContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<AboutContainer />);

  expect(wrapper).toMatchSnapshot();
});
