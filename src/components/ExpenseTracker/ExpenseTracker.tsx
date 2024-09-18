import { useEffect, useState } from 'react'
import ExpenseAdd from './ExpenseAdd'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import IExpense, { Categories } from '../../services/ExpenseService'

const ExpenseTracker = (): JSX.Element => {
  useEffect(() => { 
    document.title = "Expense Tracker"
    return () => { document.title = '' }
  }, [])

  const [expenses, setExpenses] = useState<IExpense[]>([
    {_id: '1', description: 'Book Cover', price: 200, category: 'Education'},
    {_id: '2', description: 'Audi A8', price: 10_000_000, category: 'Luxuries'},
    {_id: '3', description: 'August Bill', price: 30_000, category: 'Electricity'},
    {_id: '4', description: 'Packages Mall 28 August', price: 50_000, category: 'Grocery'}
  ])

  const [categories, setCategories] = useState<string[]>([...Categories])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  const handleAdd = (newExpense: IExpense): void => {
    setExpenses([...expenses, newExpense])

    const isNewCategory: boolean = expenses.find(expense => expense.category === newExpense.category) ? true : false
    if (!isNewCategory) setCategories([...categories, newExpense.category])
  }
  const handleDelete = (id: string): void => setExpenses(expenses.filter((expense: IExpense) => expense._id !== id))
  const onSelectCategory = (category: string): void => setSelectedCategory(category)
  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses

  return (
    <>
      <h2 className="gradient-text text-center">Expense Tracker</h2>
      
      <div className="flex-row mt-7">
        <div className=" flex-row justify-center width-40">
          <ExpenseAdd onAddItem={handleAdd} categories={categories}></ExpenseAdd>
        </div>
        <div className="flex-column justify-start width-60 px-5">
          <ExpenseFilter categories={categories} onSelectCategory={onSelectCategory} ></ExpenseFilter>
          <ExpenseList expenses={visibleExpenses} onDeleteItem={handleDelete}></ExpenseList>
        </div>
      </div>
    </>
  )
}

export default ExpenseTracker