interface ExpenseFilterProps {
  categories: string[]
  onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({ categories, onSelectCategory }: ExpenseFilterProps) => {

  return (
    <>
      <form className="form">
        <label htmlFor="filter">Filter</label>
        <select id="filter" className="mb-2" onChange={(e) => onSelectCategory(e.target.value)}>
          <option value={''}>All Categories</option>
          {categories.map(category => <option key={category} value={category} >{category}</option>)}
        </select>
      </form>
    </>
  )
}

export default ExpenseFilter