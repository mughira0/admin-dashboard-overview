// src/ProgressBar.js
import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentage1, percentage2 }) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressSegment}
          style={{ width: `${percentage1}%`, backgroundColor: "#4caf50" }}
        >
          {percentage1}% (Ali)
        </div>
        <div
          className={styles.progressSegment}
          style={{ width: `${percentage2}%`, backgroundColor: "#2196f3" }}
        >
          {percentage2}% (Others)
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
