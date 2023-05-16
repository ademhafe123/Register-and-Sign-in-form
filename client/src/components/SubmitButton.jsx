import React from "react";

function SubmitButton(props) {
  return (
    <button type="submit" className="w-100 btn btn-lg btn-primary">
      {props.button}
    </button>
  );
}

export default SubmitButton;
