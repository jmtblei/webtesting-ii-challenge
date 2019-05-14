import React from "react";
import { render, fireEvent } from "react-testing-library";
import 'react-testing-library/cleanup-after-each';

import Display from "./Display.js";

describe("<Display/>", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("should render the numbers of strikes", () => {
    const { getByText } = render(<Display />);
    const strikeButton = getByText(/strikes/i);
    fireEvent.click(strikeButton);
  });
  it("should render the numbers of balls", () => {
    const { getByText } = render(<Display />);
    const ballButton = getByText(/balls/i);
    fireEvent.click(ballButton);
  });
});
