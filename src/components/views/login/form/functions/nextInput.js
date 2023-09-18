import focus from "./focus";

import { $activeElement, $focus } from "./$";

/* El primer parametro es para saber que tecla preciono
    El segundo parametro es para saber donde estas
    y el tercer parametro es para el input al que quiero ir */
const nextInput = (e, setActived, setOnActive) => {
  const nextActive = (actived, onActive) => {
    if (
      (e.keyCode === 13 && $activeElement() === actived) ||
      (e.keyCode === 9 && $activeElement() === actived)
    ) {
      $focus(onActive);
    }
  };

  nextActive(setActived, setOnActive);

  focus();
};

export default nextInput;
