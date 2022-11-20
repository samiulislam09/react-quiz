import React from "react";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="index.html" className={styles.brand}>
              <h3>Quiz app</h3>
            </a>
          </li>
        </ul>
        <div className={styles.account}>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="signup.html">Signup</a>
        </div>
      </nav>
    </div>
  );
}
