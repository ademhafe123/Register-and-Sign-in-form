import React, { useState } from "react";
import LogoImg from "./LogoImg";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import Register from "./Register";
import Footer from "./Footer";

function Form() {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleIsRegistered = () => {
    setIsRegistered((val) => !val);
  };

  return (
    <main className="form-signin w-100 m-auto">
      <LogoImg />
      {isRegistered ? <SignInForm /> : <RegisterForm />}
      {isRegistered ? (
        <Register
          handleIsRegistered={handleIsRegistered}
          text="If you are new"
          here="Register here!"
        />
      ) : (
        <Register
          handleIsRegistered={handleIsRegistered}
          text="If you have an acount"
          here="Sign in here!"
        />
      )}
      <Footer />
    </main>
  );
}

export default Form;
