import React from "react";
import styles from "../styles/Summary.module.css";

function Summary() {
  return (
    <div>
      <div className={styles.summary}>
        <div className={styles.point}>
          <p className={styles.score}>
            Your score is <br />5 out of 10
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
