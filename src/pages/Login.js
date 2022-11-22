import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form className={`${styles.login} form`}>
        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter Password" icon="lock" />
        <Button>
          <span>Login</span>
        </Button>
        <div className="info">
          Don't have an account? <Link to="/signup">Register</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
