import React from "react";

function Register(props) {
  return (
    <div className="register">
      <p>
        {props.text}{" "}
        <span onClick={props.handleIsRegistered} className="register-here">
          {props.here}
        </span>
      </p>
    </div>
  );
}

export default Register;
