import axios from 'axios'
// Alpay
const BASE_URL = 'https://663ba6dafee6744a6ea2736d.mockapi.io/' 


export const api = axios.create({
  baseURL: BASE_URL,
})