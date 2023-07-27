import $ from "./$";

const validarContrasenas = (id1, id2) => {
  const contrasena1 = $(id1).value;
  const contrasena2 = $(id2).value;

  if (contrasena1 !== contrasena2) {
    return "Las contraseñas coinciden.";
  }
};

export { validarContrasenas };
