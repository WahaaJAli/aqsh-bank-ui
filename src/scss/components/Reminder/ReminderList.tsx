import { IReminder } from "../../services/ReminderService"
import Button from '../Button/Button'
import Error from "../Error/Error"
import Prompt from '../Prompt/Prompt'

interface ReminderListProps {
    error?: string
    isLoading?: boolean
    items: IReminder[]
    onUpdateItem: (id: string, title: string) => void
    onRemoveItem: (id: string) => void
}

const ReminderList = ({ error, isLoading, items, onUpdateItem, onRemoveItem }: ReminderListProps): JSX.Element => {
    return (
        <>
        <div className="flex-column">
            { <h2 className='list-heading'>Reminders</h2> }
            { (items.length === 0 && !isLoading && !error ) && (<Prompt className='list-promt'>No item(s) found!</Prompt>) }
            { error && <Error>{error}</Error> }
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Reminder Title</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((reminder, index) =>
                        <tr key={reminder._id}>
                            <td className='center'>({++index})</td>
                            <td>{reminder.title}</td>
                            <td className='center'><Button color='secondary' size='sm' onClick={ () => onUpdateItem(reminder._id!, `${reminder.title}!`) }>Update</Button></td>
                            <td className='center'><Button color='tertiary'  size='sm' onClick={ () => onRemoveItem(reminder._id!) }>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ReminderList;