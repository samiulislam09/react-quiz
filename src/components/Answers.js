import React from "react";
import styles from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";
function Answers() {
  return (
    <div className={styles.answers}>
      <CheckBox className={styles.answer} text="hello world" />
    </div>
  );
}

export default Answers;
