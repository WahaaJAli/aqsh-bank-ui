import Service from "./Service"
export interface IReminder {
    _id?: string
    isComplete?: boolean
    title: string
}

export default Service('/reminders')