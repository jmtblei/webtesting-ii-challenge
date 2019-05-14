import React from "react";
import { render, fireEvent } from "react-testing-library";

import Display from "./Display.js";

describe("<Display/>", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
});
