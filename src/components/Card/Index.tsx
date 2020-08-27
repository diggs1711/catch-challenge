import React from "react";
import styles from "../Card/Card.module.css";

type CardImageOptions = {
  url: string | undefined;
  alt: string;
};

type CardProps = {
  image?: CardImageOptions;
};

const Card: React.FC<CardProps> = ({ image, children }) => {
  return (
    <div className={styles.card}>
      {image ? (
        <img className={styles.card__image} src={image.url} alt={image.alt} />
      ) : null}
      <section>{children}</section>
    </div>
  );
};

export default Card;
