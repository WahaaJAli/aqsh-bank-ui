import Service from "./Service"

export interface FetchBankResponse {
  banks: IBank[]
  totalBanks: number
  currentPage: number
  nextPage: number | null
  totalPages: number
}

export interface IBank {
  readonly _id?: string
  bic: string
  bankName: string
  nickname: string
}

export default new Service<IBank>('/banks')