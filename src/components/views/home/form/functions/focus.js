import $, { $activeElement, $classList, $contain } from "./$";

const focus = () => {
  /* Condiciones para la tarjeta de Login */
  foco("loginCorreo");
  foco("loginPassword");

  /* Condiciones para la tarjeta de registro */
  foco("registerUserName");
  foco("registerUserSurName");
  foco("registerCorreo");
  foco("registerPassword");
  foco("registerPasswordConfirm");
  foco("inputDrop1");
  foco("inputDrop2");
  foco("userData");
  /* Condiciones para la tarjeta de recuperar password */
  foco("resetPassword");
};

const foco = (who) => {
  const activo = $activeElement();

  const addClass = () => {
    return document.activeElement.parentNode.classList.add("activeFocus");
  };

  const removeClass = (id) => {
    return $(id).parentNode.classList.remove("activeFocus");
  };

  if (activo === who) {
    addClass();
  } else {
    removeClass(who);
  }

  if (who !== "inputDrop2" && !$contain("dropdown2", "activeFocus")) {
    $classList("dropdown2").remove("active");
  }

  if (who !== "inputDrop1" && !$contain("dropdown", "activeFocus")) {
    $classList("dropdown").remove("active");
  }
};

export default focus;
