import React from "react";
import styles from "./Tag.module.css";

type TagProps = {
  title: string;
};

const Tag: React.FC<TagProps> = ({ title }) => {
  return <div className={styles.tag}>{title.toLocaleUpperCase()}</div>;
};

export default Tag;
