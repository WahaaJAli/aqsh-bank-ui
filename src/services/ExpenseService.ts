export const Categories = ["Education", "Electricity", "Grocery", "Luxuries"] as const
interface IExpense {
  readonly _id: string
  category: string
  description: string
  price: number
}

export default IExpense