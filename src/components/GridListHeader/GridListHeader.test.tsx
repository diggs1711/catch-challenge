import React from "react";
import { render, screen } from "@testing-library/react";
import GridListHeader from "./Index";

describe("GridListHeader", () => {
  it("renders title", () => {
    render(<GridListHeader title={"Test title"} />);
    expect(screen.getByText("Test title")).toBeInTheDocument();
  });
});
