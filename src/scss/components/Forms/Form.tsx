import { ReactNode } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '../Button/Button'
import Error from '../Error/Error'

interface FormProps {
  children: ReactNode
  title: string
  onClick?: () => void
}

const Form = ({ children, title, onClick }: FormProps): JSX.Element => {
  const schema = z.object({ title: z.string().min(3).max(21).regex(/^[a-zA-Z0-9\s]+$/, { message: `Please provide a ${title.toLowerCase()} without special characters.` }) })
  type FormData = z.infer<typeof schema>

  const { handleSubmit, register, reset, setFocus, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) })
  setFocus(title as "title")
  const onSubmit = (data: FieldValues): void => { console.log(data); reset() }

  return (
    <>
      <form className='form' onSubmit={ handleSubmit(onSubmit) } >
        <label htmlFor={title} >{ title }</label>
        
        <input id={title} { ...register(title as "title") } type='text' placeholder={`Enter ${title.toLowerCase()}...`} />
        { errors.title && <Error>{errors.title.message}</Error> }
        
        <Button color='primary' disabled={!isValid} size='md' onClick={ () => onClick }>{ children }</Button>
      </form>
    </>
  )
}

export default Form