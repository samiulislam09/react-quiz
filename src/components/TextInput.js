import React from "react";
import styles from "../styles/TextInpuut.module.css";

function TextInput({ icon, ...rest }) {
  return (
    <div class={styles.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default TextInput;
