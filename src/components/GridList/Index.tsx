import React from "react";
import styles from "./GridList.module.css";

type GridListProps = {
  items: JSX.Element[];
};

const GridList: React.FC<GridListProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return <div className={styles.grid}>{items.map((item) => item)}</div>;
};

export default GridList;
