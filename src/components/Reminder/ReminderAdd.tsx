import { useState } from "react"
import Button from "../Button/Button"
import Error from "../Error/Error"

interface ReminderAddProps {
    error?: string
    onAddItem: (title: string) => void
}

function ReminderAdd({ error, onAddItem }: ReminderAddProps): JSX.Element {
    const [ title, setTitle ] = useState('')

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        onAddItem(title)
        setTitle('')
    }

    return (
        <form className="form" onSubmit={ handleSubmit } >
            <label htmlFor="title">Set Reminder</label>
            <input id="title" value={ title } onChange={ e => setTitle(e.target.value) } required type="text" placeholder='Enter title...'/>
            { error && <Error>{error}</Error> }
            <Button color='primary' size='md' type="submit" onClick={ () => console.log() }>Add Reminder</Button>
        </form>
    );
}

export default ReminderAdd;