import React from "react";
import $, { $toggle, $focus, $classList } from "../../../functions/$";
import Icono from "../../../../../../nano/Icono";
import { v4 as uuidv4 } from "uuid";
import data from "./dataCountry";

import  focus  from "../../../functions/focus";

const SelectCountry = () => {
  const dropdown = () => {
    $toggle("dropdown", "active");
    $focus("inputDrop1");
    $classList("dropdown").add("activeFocus");
  };

  const replaceText = (id2) => {
    const id = $(id2).id;

    $("selLabel").value = $(id).getAttribute("value");
    $("selLabel").innerHTML =
      `<span class="ico icon-world" id="" role="img" aria-label="sheep"></span>` +
      $(id).getAttribute("name");
    $("dropdown").classList.toggle("active");
  };

  return (
    <div className="dropdown" id="dropdown">
      <span
        className="selLabel"
        id="selLabel"
        onClick={() => {
          dropdown();
          focus()
        }}
      >
        <Icono css="icon-world" />
        Seleccione su pais
      </span>

      <ul className="dropdown-list" id="dropdown-list">
        {data().map((e) => {
          return (
            <li
              onClick={() => {
                replaceText(e.iso2);
              }}
              key={uuidv4()}
              value={e.iso2}
              id={e.iso2}
              name={e.name}
            >
              <span> {e.nombre}</span>
            </li>
          );
        })}
      </ul>
      <input type="text" name="cd-dropdown" id="inputDrop1" />
    </div>
  );
};

export default SelectCountry;
