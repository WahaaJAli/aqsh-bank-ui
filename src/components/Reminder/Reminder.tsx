import { useEffect, useState, AnimationEvent } from "react"
import Alert from "../Alert/Alert"
import IAlert from "../../models/IAlert"
import Prompt from "../Prompt/Prompt"
import ReminderAdd from "./ReminderAdd"
import ReminderList from "./ReminderList"
import ReminderService, { IReminder } from "../../services/ReminderService"
import useReminders from "../../hooks/useReminders"

const Reminder = (): JSX.Element => {
    useEffect(() => { document.title = 'Reminders' }, [])

    const resetAlert: IAlert = {color: 'green', title: ''}
    const { error, isLoading, reminders, setError, setReminders } = useReminders()
    const [addError, setAddError] = useState<string>()
    const [alert, setAlert] = useState<IAlert>(resetAlert)

    const createReminder = (title: string): void => {
        const originalReminders: IReminder[] = [...reminders]

        const newReminder: IReminder = { title }
        setAlert({color: 'green', title: `Reminder ${title} added successfully.`})
        setReminders([newReminder, ...reminders])

        ReminderService.create<IReminder>(newReminder)
            .then(({data: newReminder}) => setReminders([newReminder, ...reminders]))
            .catch((error) => {
                setAlert(resetAlert)
                setReminders(originalReminders)
                setAddError(error.response.data.error || error.message)
            })
    }

    const updateReminder = (id: string, title: string): void => {
        const originalReminders = [...reminders]
        
        setAlert({color: 'blue', title: `Reminder ${reminders.find(reminder => reminder._id === id)?.title} updated to ${title} successfully.`})
        setReminders(reminders.map(reminder => reminder._id === id ? { ...reminder, title } : reminder))

        ReminderService.getById<IReminder>(id)
            .then(({data: prevReminder}) => {
                const updatedReminder: IReminder = {...prevReminder, title }

                ReminderService.update<IReminder>(id, updatedReminder)
                    .catch(error => {
                        setAlert(resetAlert)
                        setReminders(originalReminders)
                        setError(error.response.data.error || error.message)
                    })
            })
            .catch(error => {
                setAlert(resetAlert)
                setReminders(originalReminders)
                setError(error.response.data.error || error.message)
            })
    }

    const removeReminder = (id: string): void => {
        const originalReminders = [...reminders]

        setAlert({color: 'red', title: `Reminder ${reminders.find(reminder => reminder._id === id)?.title} deleted successfully.`})
        setReminders(reminders.filter(reminder => reminder._id !== id))

        ReminderService.delete<IReminder>(id)
            .catch((error) => {
                setAlert(resetAlert)
                setReminders(originalReminders)
                setError(error.message)
            })
    }

    const handleAnimationEvent = (e: AnimationEvent<HTMLDivElement>) => (e.animationName === 'slideIn_Down') && setAlert(resetAlert)

    return (
        <>
            { alert.title && <Alert onAnimationEnd={ handleAnimationEvent } color={alert.color} 
                onClose={ () => setAlert(resetAlert) } >{ alert.title }</Alert> }

            <div className="mt-7 flex-row">
                <ReminderAdd error={ addError } onAddItem={ createReminder } />

                { isLoading && <Prompt>Fetching details. Please wait...</Prompt> }
                <ReminderList error={ error } items={ reminders } isLoading={ isLoading } onRemoveItem={ removeReminder } onUpdateItem={ updateReminder } />
            </div>
        </>
    )
}

export default Reminder