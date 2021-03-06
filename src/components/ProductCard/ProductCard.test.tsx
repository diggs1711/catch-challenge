import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./Index";
import { displayCentsAsDollars } from "../../utils/centsToDollarConverters/centsToDollarConverter";

describe("ProductCard", () => {
  it("renders image and card details", () => {
    const testDetails = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: 3145,
      retailPrice: 0,
      imageUrl: "product_image.jpg",
      quantityAvailable: 65,
    };

    render(<ProductCard details={testDetails} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(testDetails.name)).toBeInTheDocument();
    expect(
      screen.queryByText(
        displayCentsAsDollars(testDetails.retailPrice).toString()
      )
    ).toBeNull();
    expect(
      screen.getByText(displayCentsAsDollars(testDetails.salePrice).toString())
    ).toBeInTheDocument();
  });

  it("renders retail price with strikethrough when retail is greater than zero", () => {
    const testDetails = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: 3145,
      retailPrice: 5000,
      imageUrl: "product_image.jpg",
      quantityAvailable: 65,
    };

    render(<ProductCard details={testDetails} />);

    expect(
      screen.queryByText(
        displayCentsAsDollars(testDetails.retailPrice).toString()
      )
    ).toBeInTheDocument();
  });

  it("renders product with quantity available equal 0 with sold out tag", () => {
    const testDetails = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: 3145,
      retailPrice: 5000,
      imageUrl: "product_image.jpg",
      quantityAvailable: 0,
    };

    render(<ProductCard details={testDetails} />);

    expect(
      screen.getByText(displayCentsAsDollars(testDetails.salePrice).toString())
    ).toBeInTheDocument();
    expect(screen.getByText(/SOLD OUT/gi)).toBeInTheDocument();
  });
});
