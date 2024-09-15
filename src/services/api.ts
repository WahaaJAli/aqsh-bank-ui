import axios, { CanceledError, AxiosError } from 'axios'

export default axios.create({ baseURL: 'http://localhost:9000/' })
export { CanceledError, AxiosError }