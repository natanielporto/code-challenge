import React from "react";
import ReactDOM from "react-dom";
import Header from "..";
import { render } from "@testing-library/react";

it("renders the header component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div); 
})

it("renders the h1 and the propper text", () => {
  const { getByText } = render(<Header />);
  const element = getByText("SensorTech");
  expect(element).toBeInTheDocument();
})