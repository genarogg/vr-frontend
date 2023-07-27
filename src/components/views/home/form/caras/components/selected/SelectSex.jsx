import React from "react";
import $, { $toggle, $focus, $classList } from "../../../functions/$";
import Icono from "../../../../../../nano/Icono";

import focus from "../../../functions/focus";

const SelectSex = () => {
  const dropdown = () => {
    $("dropdown-list2").style.overflow = "hidden";
    $toggle("dropdown2", "active");

    $focus("inputDrop2");
    $classList("dropdown2").add("activeFocus");
  };

  const replaceText = (id2) => {
    const id = id2;

    $("selLabel2").value = $(id).getAttribute("value");
    $("selLabel2").innerHTML =
      `<span class="ico icon-intersex" id="" role="img" aria-label="sheep"></span>` +
      $(id).getAttribute("name");

    $toggle("dropdown2", "active");
  };

  return (
    <div className="dropdown" id="dropdown2">
      <span
        className="selLabel"
        id="selLabel2"
        onClick={() => {
          dropdown();
          focus();
        }}
      >
        <Icono css="icon-intersex" />
        Seleccionar sexo
      </span>

      <ul className="dropdown-list" id="dropdown-list2">
        <li
          id="man"
          onClick={() => {
            replaceText("man");
          }}
          value="man"
          name="hombre"
        >
          <span>Hombre</span>
        </li>
        <li
          id="woman"
          onClick={() => {
            replaceText("woman");
          }}
          value="woman"
          name="mujer"
        >
          <span>Mujer</span>
        </li>
      </ul>
      <input type="text" name="cd-dropdown" id="inputDrop2" />
    </div>
  );
};

export default SelectSex;
