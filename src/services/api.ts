import axios, { CanceledError, AxiosError } from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export default axios.create({ baseURL: API_URL })
export { CanceledError, AxiosError }