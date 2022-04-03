import React from "react";
import renderer from "react-test-renderer";
import Modal from "./Modal";

it("Render Modal", () => {
  const tree = renderer.create(<Modal />).toJSON();
  expect(tree).toMatchSnapshot();
});
