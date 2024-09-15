import { FieldValues, useForm } from "react-hook-form"
import { IBank } from "../../../services/BankService"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../../Button/Button"
import Error from "../../Error/Error"
import BankSchema from "../../../schemas/Bank"

interface BankAddProps {
    error?: string
    onAddItem: ({}: IBank) => void
}

type FormData = z.infer<typeof BankSchema>

const BankAdd = ({ error, onAddItem }: BankAddProps): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(BankSchema) })
    const onSubmit = (data: FieldValues): void => {
        onAddItem({
            bic: `${data.bic}PKKA`, 
            name: data.name.trim().split(' ').map((word: string) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' '), 
            nickName: data.bic.substring(0, 4)
        })
        reset()
    }

    return (
    <>
        <form className="form" onSubmit={ handleSubmit(onSubmit) } >
            <label htmlFor="bank">Add Bank</label>
            
            <div className="form-input">
                <input id="name" { ...register('name') } type="text" placeholder="Enter bank name"  />
                { errors.name && <Error>{errors.name.message}</Error> }
            </div>

            <div className="form-input">
                <input id="bic" { ...register('bic') } type="text" placeholder="Enter BIC"  />
                { errors.bic && <Error>{errors.bic.message}</Error> }
            </div>
            
            { error && <Error>{error}</Error> }
            <Button color="primary" size="md" type="submit" onClick={() => console.log()} >Add Bank</Button>
        </form>
    </>
  )
}

export default BankAdd