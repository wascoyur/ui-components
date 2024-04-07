import { useState } from "react";
import styles from "./CustomRange.module.css";

const CustomRange = () => {
  const [value, setValue] = useState(50);
  return (
    <input
      onChange={(e) => {
        const rangeVal = parseInt(e.target.value);
        setValue(rangeVal);
      }}
      type="range"
      min={1}
      max={100}
      value={value}
      className={styles.range}
      id="myRange"
    />
  );
};

export default CustomRange;
