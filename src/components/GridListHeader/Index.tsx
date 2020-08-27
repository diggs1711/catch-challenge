import React from "react";

type GridListHeaderProps = {
  title: string;
};

const GridListHeader: React.FC<GridListHeaderProps> = ({ title }) => {
  return <h3>{title}</h3>;
};

export default GridListHeader;
