import axios, { CanceledError, AxiosError } from 'axios'

export default axios.create({ baseURL: 'http://localhost:2123/' })
export { CanceledError, AxiosError }