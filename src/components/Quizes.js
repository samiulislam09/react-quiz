import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Quizes.module.css";
import Quiz from "./Quiz";

function Quizes() {
  return (
    <div className={styles.quizes}>
      <Link to="/quiz">
        <Quiz />
      </Link>
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
    </div>
  );
}

export default Quizes;
