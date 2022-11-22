import React from "react";
import styles from "../styles/Form.module.css";

function Form({ children, className, ...rest }) {
  return (
    <form action="#" className={`${className} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
