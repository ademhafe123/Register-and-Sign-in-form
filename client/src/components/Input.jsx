import React from "react";

function Input(props) {
  return (
    <div className="form-floating">
      <input
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
        autoComplete="off"
        name={props.name}
        style={props.style}
        type={props.type}
        className={"form-control " + props.className}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
      />
      <label className={props.className} htmlFor="floatingInput">
        {props.label}
      </label>
    </div>
  );
}

export default Input;
