import React from "react";
import styles from "../styles/Quuestions.module.css";
import Answers from "./Answers";

function Questions() {
  return (
    <div>
      <div class={styles.question}>
        <div class={styles.qtitle}>
          <span class="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </div>
  );
}

export default Questions;
