import React from "react";
import Questions from "../components/Questions";
import styles from "../styles/Analysis.module.css";

function Analysis() {
  return (
    <div>
      <div class={styles.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Questions />
      </div>
    </div>
  );
}

export default Analysis;
