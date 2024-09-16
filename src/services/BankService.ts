import Service from "./Service"

export interface IBank {
    _id?: string
    bic: string
    bankName: string
    nickName: string
    customersCount?: number
}

export default Service('/banks')