import React from "react";
import styles from "../styles/Button.module.css";

function Button({ children, className }) {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
}

export default Button;
