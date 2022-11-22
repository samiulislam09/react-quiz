import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">
              <p className={styles.brand}>
                <h3>Quiz app</h3>
              </p>
            </Link>
          </li>
        </ul>
        <div className={styles.account}>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
}
