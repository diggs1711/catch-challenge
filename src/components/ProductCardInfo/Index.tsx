import React from "react";

type TextSize = "small" | "large";

type ProductCardInfoProps = {
  text: string;
  size?: TextSize;
};

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  text,
  size = "small",
}) => {
  return (
    <div
      style={{
        fontSize: size === "small" ? "16px" : "24px",
        fontWeight: size === "small" ? "normal" : "bold",
      }}
    >
      {text}
    </div>
  );
};

export default ProductCardInfo;
