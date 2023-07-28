import axios from "axios"

import { BACKEND } from "../../env"

const clienteAxios = axios.create({
  baseURL: BACKEND,
})

export default clienteAxios
