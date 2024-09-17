import Service from "./Service"
export interface IBank {
    readonly _id?: string
    bic: string
    bankName: string
    nickname: string
}

export default Service('/banks')