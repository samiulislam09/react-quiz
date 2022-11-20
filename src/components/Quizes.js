import React from "react";
import styles from "../styles/Quizes.module.css";
import Quiz from "./Quiz";

function Quizes() {
  return (
    <div className={styles.quizes}>
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
    </div>
  );
}

export default Quizes;
