import Service from "./Service"

export interface IUser {
  readonly _id: string
  username: string
  email: string
  password: string
  isAdmin: boolean
}

export default Service('/users')