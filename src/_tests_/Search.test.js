import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  })

  it("renders submit button", () => {
    render(<Search />);
expect(screen.getByRole("button")).toBeVisible();
  })

  it("renders input", () => {
    render(<Search />);
expect(screen.getByTestId("search-input")).toBeVisible();
  })
  
});