const Categories = ["Education", "Electricity", "Grocery", "Luxuries"] as const
export interface IExpense {
  readonly _id: string
  category: string
  description: string
  price: number
}

export default Categories