import $, { $activeElement, $value } from "./$";
/* El parametro es para saber que componente lo llama */
const check = (component) => {
  /* Resive como parametro un hijo del arbol y le agrega una clase al padre */
  const input = (value) => {
    if ($value(value) === "" || $value(value) === undefined) {
      $(value).parentNode.classList.add("error");

      setTimeout(() => {
        $(value).parentNode.classList.remove("error");
      }, 1500);
    }
  };

  if (component === "register") {
    if ($activeElement() === "registerButtom") {
      input("registerUserName");
      input("registerUserSurName");
      input("registerCorreo");
      input("selLabel2");
      input("userData");
      input("selLabel");
      input("registerPassword");
      input("registerPasswordConfirm");
    }
  }

  if (component === "login") {
    if ($activeElement() === "loginButton") {
      input("loginCorreo");
      input("loginPassword");
    }
  }
};

export default check;
