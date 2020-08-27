import React from "react";
import { render, screen } from "@testing-library/react";
import Tag from "./Index";

describe("Tag", () => {
  it("renders title", () => {
    const title = "test title";
    render(<Tag title={title} />);
    expect(screen.getByText(title.toLocaleUpperCase())).toBeInTheDocument();
  });
});
