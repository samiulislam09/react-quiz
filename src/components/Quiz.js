import React from "react";
import image from "../assets/images/3.jpg";
import styles from "../styles/Quiz.module.css";

export default function Quiz() {
  return (
    <div>
      <div className={styles.quiz}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </div>
  );
}
