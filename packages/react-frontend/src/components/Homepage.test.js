import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./HomePage.js";

test("The discover headline would be rendered", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Discover/i);
  expect(linkElement).toBeInTheDocument();
});
