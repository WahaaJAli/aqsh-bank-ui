import { CanceledError, AxiosError } from '../services/api'
import { useEffect, useState } from "react"
import ReminderService, { IReminder } from "../services/ReminderService"


const useReminders = () => {
    useEffect(() => { getReminders() }, [])

    const [reminders, setReminders] = useState<IReminder[]>([])
    const [error, setError] = useState<string>()
    const [isLoading, setLoading] = useState(true)

    const getReminders = async () => {
        const { request, cancel } = ReminderService.get<IReminder>()
        
        request
            .then((res) => setReminders(res.data))
            .catch((err) => {
                if(err instanceof CanceledError) return
                setError((err as AxiosError).message)
            })
            .finally(() => setLoading(false))
        
        return () => cancel()
    }

    return { error, isLoading, reminders, setError, setLoading, setReminders }
}

export default useReminders