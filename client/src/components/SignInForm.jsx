import React, { useState } from "react";
import axios from "axios";
import Heading from "./Heading";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyField, setEmptyField] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  function onSignIn(event) {
    event.preventDefault();
    const student = {
      email,
      password,
    };
    if (student.email === "" || student.password === "") {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      axios
        .post("http://localhost:7000/studentRegister/v1/signInStudent", student)
        .then((response) => {
          console.log(response.data);
          if (response.data === "No students found") {
            setEmail("");
            setWrongEmail(true);
          } else if (response.data === "Wrong password") {
            setWrongEmail(false);
            setWrongPassword(true);
            setPassword("");
          } else if (response.data === "Logged in") {
            setWrongPassword(false);
            setEmail("");
            setPassword("");
          }
        });
    }
  }
  return (
    <form onSubmit={onSignIn}>
      <Heading text="Please Sign-in" />
      {emptyField && (
        <p className="no-input-p">Please write input in all fields!</p>
      )}
      <Input
        setValue={setEmail}
        type="email"
        value={email}
        className={
          wrongEmail
            ? "sign-in-email email-not-found"
            : "sign-in-email email-found"
        }
        placeholder="name@example.com"
        label={wrongEmail ? "Email address not found" : "Email address"}
        id="floatingEmail"
      />
      <Input
        setValue={setPassword}
        type="password"
        value={password}
        className={wrongPassword ? "wrong-password" : undefined}
        label={wrongPassword ? "Wrong password" : "Password"}
        placeholder="Password"
        id="floatingPassword"
      />
      <SubmitButton button="Sign in" />
    </form>
  );
}

export default SignInForm;
