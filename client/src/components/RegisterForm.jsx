import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";

const styleForInput = {
  borderRadius: "0",
  marginBottom: "-1px",
};

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  function onRegister(event) {
    event.preventDefault();
    const student = {
      name,
      email,
      password,
      confPassword,
    };

    if (
      student.name === "" ||
      student.email === "" ||
      student.password === "" ||
      confPassword === ""
    ) {
      setEmptyField(true);
    } else {
      axios
        .post("http://localhost:7000/studentRegister/v1/addStudent", student)
        .then((response) => {
          if (response.data === "Already exists") {
            setEmail("");
            setUserExists(true);
          } else if (response.data === "Passwords do not match") {
            setConfPassword("");
            setWrongPassword(true);
          } else {
            console.log(response.data);
            setName("");
            setEmail("");
            setPassword("");
            setConfPassword("");
            setUserExists(false);
            setWrongPassword(false);
            setEmptyField(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <form onSubmit={onRegister}>
      <Heading text="Please Register" />
      {emptyField && (
        <p className="no-input-p">Please write input in all fields!</p>
      )}
      <Input
        name="name"
        value={name}
        setValue={setName}
        type="text"
        placeholder="John Doe"
        label="Full name"
        id="floatingName"
      />
      <Input
        label={userExists ? "The email is already in use" : "Email address"}
        name="email"
        value={email}
        setValue={setEmail}
        className={userExists ? "email-input-taken" : "email-input"}
        type="email"
        placeholder="name@example.com"
        id="floatingEmail"
      />
      <Input
        name="password"
        value={password}
        setValue={setPassword}
        style={styleForInput}
        type="password"
        label="Password"
        placeholder="Password"
        id="floatingPassword"
      />
      <Input
        name="confPassword"
        value={confPassword}
        setValue={setConfPassword}
        type="password"
        className={wrongPassword ? "wrong-pass-input" : "pass-input"}
        label={wrongPassword ? "Wrong password" : "Confirm password"}
        placeholder="Confirm password"
        id="floatingConfirmPassword"
      />
      <SubmitButton button="Register" />
    </form>
  );
}

export default RegisterForm;
