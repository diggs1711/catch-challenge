import React from "react";

type TextSize = "small" | "large";

type ProductCardInfoProps = {
  text: string;
  size?: TextSize;
  strikethrough?: boolean;
};

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  text,
  size = "small",
  strikethrough = false,
}) => {
  return (
    <div
      style={{
        fontSize: size === "small" ? "16px" : "24px",
        fontWeight: size === "small" ? "normal" : "bold",
        textDecoration: strikethrough ? "line-through" : "",
      }}
    >
      {text}
    </div>
  );
};

export default ProductCardInfo;
