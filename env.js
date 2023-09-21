/* const BACKEND_LOCAL = "http://localhost:3000/api" */
/* const BACKEND_CON_DOMINIO = "https://backend.vueltarapida.net/api" */
/* const BACKEND_SIN_DOMINIO = "https://vr-backend-k0xy.onrender.com/api"; */
const BACKEND_PAGO = "https://vr-backend2.onrender.com/api"

const BACKEND = BACKEND_LOCAL || BACKEND_PAGO || BACKEND_SIN_DOMINIO || BACKEND_CON_DOMINIO

export { BACKEND }
