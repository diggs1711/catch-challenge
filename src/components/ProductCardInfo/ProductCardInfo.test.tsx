import React from "react";
import { render } from "@testing-library/react";
import ProductCardInfo from "./Index";

describe("ProductCardInfo", () => {
  it("displays small text by default", () => {
    const { container } = render(<ProductCardInfo text="This is a test" />);
    expect(container).toMatchSnapshot();
  });

  it("displays large text", () => {
    const { container } = render(<ProductCardInfo text="This is a test" />);
    expect(container).toMatchSnapshot();
  });
});
