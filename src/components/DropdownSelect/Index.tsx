import React, { ChangeEvent } from "react";
import styles from "./DropdownSelect.module.css";

type OptionProps = {
  name: string;
  id: string;
};

type DropdownSelectProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: OptionProps[];
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  onChange,
  options,
  value,
}) => {
  return (
    <select
      className={styles.dropdown}
      value={value}
      onChange={onChange}
      name="sort"
    >
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
