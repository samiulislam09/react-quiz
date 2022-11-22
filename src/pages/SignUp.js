import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import styles from "../styles/SignUpp.module.css";

function SignUp() {
  return (
    <div>
      <h1>create an account</h1>
      <Form className={`${styles.signup}`}>
        <TextInput type="text" placeholder="Enter Name" icon="person" />

        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter Password" icon="lock" />

        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock_clock"
        />
        <CheckBox text="I agree to the Terms & Conditions" />
        <Button>
          <span>Sign Up</span>
        </Button>
        <div className="info">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
