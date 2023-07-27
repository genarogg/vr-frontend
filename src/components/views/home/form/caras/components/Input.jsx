import React from "react";
import focus from "../../functions/focus";
import nextInput from "../../functions/nextInput";

import Icono from "../../../../../nano/Icono";

const Input = ({ type, id, icono, placeholder, next, maxLength="Initial" }) => {
  return (
    <>
      <div className="containerInput">
        <label htmlFor={id}>
          <Icono css={icono} />
        </label>
        <input
          name={id}
          id={id}
          type={type}
          placeholder={placeholder}
          onClick={() => {
            focus();
          }}
          onKeyDown={(e) => {
            nextInput(e, id, next);
          }}
          maxLength={maxLength}
        />
      </div>
    </>
  );
};

export default Input;
