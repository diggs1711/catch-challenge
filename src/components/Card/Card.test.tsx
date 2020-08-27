import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Index";

describe("Card", () => {
  const testDetails = {
    imageUrl: "product_image.jpg",
    title: "Test title",
  };
  it("renders image and children", () => {
    render(
      <Card image={{ url: testDetails.imageUrl, alt: testDetails.title }}>
        <h6>{testDetails.title}</h6>
      </Card>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(testDetails.title)).toBeInTheDocument();
  });

  it("renders when no image is supplied", () => {
    const { container } = render(
      <Card>
        <h6>{testDetails.title}</h6>
      </Card>
    );

    expect(container).toMatchSnapshot();
  });
});
