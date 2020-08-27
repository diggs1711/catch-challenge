import React from "react";
import Card from "../Card/Index";
import Tag from "../Tag/Index";
import styles from "./ProductCard.module.css";
import { displayCentsAsDollars } from "../../utils/centsToDollarConverters/centsToDollarConverter";
import ProductCardInfo from "../ProductCardInfo/Index";

export type ProductDetails = {
  name: string;
  id: string;
  salePrice: number;
  retailPrice: number;
  quantityAvailable: number;
  imageUrl: string;
};

type ProductCardProps = {
  details: ProductDetails;
};

const ProductCard: React.FC<ProductCardProps> = ({ details }) => {
  const { imageUrl, name, retailPrice, salePrice, quantityAvailable } = details;

  return (
    <Card image={{ url: imageUrl, alt: name }}>
      {quantityAvailable === 0 ? <Tag title="Sold out" /> : null}
      <div className={styles.product_card__body}>
        <h6>{name}</h6>
        {retailPrice > 0 ? (
          <ProductCardInfo
            strikethrough
            text={displayCentsAsDollars(retailPrice)}
          />
        ) : null}
        <ProductCardInfo text={displayCentsAsDollars(salePrice)} size="large" />
      </div>
    </Card>
  );
};

export default ProductCard;
