import Service from "./Service"

export interface FetchBankResponse {
  banks: IBank[]
  nextPage: number | null
}

export interface IBank {
    readonly _id?: string
    bic: string
    bankName: string
    nickname: string
}

export default Service('/banks')