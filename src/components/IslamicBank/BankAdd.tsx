import { FieldValues, useForm } from "react-hook-form"
import { IBank } from "../../services/BankService"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import BankSchema from "../../schemas/Bank"
import Button from "../Button/Button"
import Error from "../Error/Error"
import Icons from "../../icons/Icons"

interface BankAddProps {
  error?: string
  onAddItem: ({ }: IBank) => void
}

type FormData = z.infer<typeof BankSchema>

const BankAdd = ({ error, onAddItem }: BankAddProps): JSX.Element => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(BankSchema) })
  const onSubmit = (data: FieldValues): void => {
    onAddItem({
      bic: `${data.bic.trim()}PKKA`,
      bankName: data.bankName.trim().split(' ').map((word: string) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' '),
      nickname: data.bic.substring(0, 4)
    })
    reset()
  }

  return (
    <>
      <div className="flex-column">

        <h2 className='list-heading'>
          <span className='mr-2' >Add Bank</span>
          <Icons.Bank size={40} color='purple' />
        </h2>

        <form className="form form-box" onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="bankName">Bank Name</label>
          <div className="form-input">
            <input id="bankName" {...register('bankName')} type="text" placeholder="Enter bank name" />
            {errors.bankName && <Error>{errors.bankName.message}</Error>}
          </div>

          <label htmlFor="bic">Bank Identifier Code</label>
          <div className="form-input">
            <input id="bic" {...register('bic')} type="text" placeholder="Enter BIC" />
            {errors.bic && <Error>{errors.bic.message}</Error>}
          </div>

          {error && <Error>{error}</Error>}
          <Button color="primary" size="md" type="submit" onClick={() => console.log()} >Add Bank</Button>
        </form>
      </div>
    </>
  )
}

export default BankAdd