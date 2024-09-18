import { useState } from "react"
import Button from "../Button/Button"
import IExpense from "../../services/ExpenseService"

interface ExpenseListProps {
  expenses: IExpense[]
  onDeleteItem: (id: string) => void
}

const ExpenseList = ({ expenses, onDeleteItem }: ExpenseListProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<string>('-1')
  const onClick = (id: string): void => setSelectedIndex(selectedIndex !== id ? id : '-1')
  const calcTotal = (): number => parseFloat(expenses.reduce((acc, expense) =>  acc + +expense.price, 0).toFixed(2))

  return (
    <>
      {
        (expenses.length > 0) &&
        <table className="table table-bordered width-50 center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense =>
              <tr key={expense._id} className={(selectedIndex === expense._id) ? 'active' : ''} onClick={() => onClick(expense._id)}>
                <td>{expense.description}</td>
                <td>{expense.price}</td>
                <td>{expense.category}</td>
                <td>
                  <Button color="tertiary" size="sm" onClick={() => onDeleteItem(expense._id)} >Delete</Button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>PKR {calcTotal()}/-</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      }
    </>
  )
}

export default ExpenseList