import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../Button/Button'
import Categories, { IExpense } from '../../services/ExpenseService'
import Error from '../Error/Error'
import { useEffect } from 'react'

const schema = z.object({
    description: z.string().min(3, {message: 'Description should be atleast 3 characters long.'}).max(50),
    price: z.number({invalid_type_error: 'Price is Invalid'}).min(0.01).max(9_99_999),
    category: z.enum(Categories, {
        errorMap: () => ({ message: 'Category is requried.'})
    })
})

interface ExpenseAddProps {
    categories: string[]
    onAddItem: ({}: IExpense) => void
}

const ExpenseAdd = ({ onAddItem, categories }: ExpenseAddProps) => {
    useEffect(() => setFocus('description'), [])
    type FormData = z.infer<typeof schema>
    
    const { handleSubmit, register, reset, setFocus, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema)})
    const uid = () => crypto.randomUUID().replace('-', '').substring(0, 5)
    const onHandleSubmit = ({description, price, category}: FieldValues) => { 
        const expense: IExpense = { _id: uid(), description, price, category }
        onAddItem(expense)
        reset()
    }

  return (
    <>
    <form className='form form-box' onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor="description">Description</label>
        <input {...register('description')}  id='description' type="text" />
        {errors.description && <Error>{errors.description.message}</Error>}            

        <label className='mt-2' htmlFor="price">Price</label>
        <input {...register('price', { valueAsNumber: true })}  id='price' type="text" />
        {errors.price && <Error>{errors.price.message}</Error>}            

        <label className='mt-2' htmlFor="category">Category</label>
        <select id='category' {...register('category')}>
            <option value={''}></option>
            {categories.map(category => <option key={category} value={category} >{category}</option>)}
        </select>
        {errors.category && <Error>{errors.category.message}</Error>}

        <Button color='primary' size='md' onClick={() => console.log('Added!')} type='submit'>Add Expense</Button>
    </form>
    </>
  )
}

export default ExpenseAdd