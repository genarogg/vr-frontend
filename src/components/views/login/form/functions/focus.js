import $, { $activeElement, $classList, $contain } from "./$"

const focus = () => {
  try {
    /* Condiciones para la tarjeta de Login */
    foco("loginCorreo")
    foco("loginPassword")

    /* Condiciones para la tarjeta de registro */
    foco("registerUserName")
    foco("registerUserSurName")
    foco("registerCorreo")
    foco("registerPassword")
    foco("registerPasswordConfirm")
    /* foco("inputDrop1"); */
    foco("inputDrop2")
    foco("userData")
    /* Condiciones para la tarjeta de recuperar password */
    foco("resetPassword")
  } catch (error) {

  }

  try {
    foco("newPass")
    foco("newPassRepited")
  } catch (error) {
  }
}

const foco = who => {
  const activo = $activeElement()

  const addClass = () => {
    return document.activeElement.parentNode.classList.add("activeFocus")
  }

  const removeClass = id => {
    return $(id).parentNode.classList.remove("activeFocus")
  }

  if (activo === who) {
    addClass()
    document.activeElement.focus()
  } else {
    removeClass(who)
  }

  try {
    if (who !== "inputDrop2" && !$contain("dropdown2", "activeFocus")) {
      $classList("dropdown2").remove("active")
    }
  } catch (error) {

  }

  /* if (who !== "inputDrop1" && !$contain("dropdown", "activeFocus")) {
    $classList("dropdown").remove("active");
  } */
}

export default focus
