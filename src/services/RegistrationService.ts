import Service from "./Service"

export interface IUser {
  readonly _id: string
  username: string
  email: string
  password: string
}

export default Service('/users')