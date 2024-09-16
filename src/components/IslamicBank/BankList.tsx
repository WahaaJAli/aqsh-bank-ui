import { IBank } from '../../services/BankService'
import { useState } from 'react'
import Button from '../Button/Button'
import Error from '../Error/Error'
import Icons from '../../icons/Icons'
import Prompt from '../Prompt/Prompt'

interface BankListProps {
    error?: string
    items: IBank[]
    isLoading?: boolean
    onRemoveItem: (id: string) => void
    onSelectItem?: (item: string) => void
    onUpdateItem: (id: string, object: IBank) => void
}

const BankList = ({ error, items, isLoading, onRemoveItem, onSelectItem, onUpdateItem }: BankListProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<number>(-1)

    const onClick = (bank: IBank, index: number) => {
        setSelectedItem(index)
        onSelectItem?.(bank.bankName)
    }

    return (
    <>
        <div className="flex-column">
            <h2 className='list-heading'>
                <span className='mr-2' >Banks</span>
                <Icons.Butterfly size={40} color='purple' />
            </h2>

            { (items.length === 0 && !isLoading && !error) && (<Prompt className='list-promt'>No item(s) found!</Prompt>) }
            { error && <Error>{error}</Error> }

            { (items.length !== 0 ) &&
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bank Name</th>
                            <th>Nick Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((bank, index) =>
                            <tr key={bank._id}>
                                <td className='center'>({++index})</td>
                                <td className={selectedItem === index ? 'active': ''} onClick={() => onClick(bank, index)} >{bank.bankName}</td>
                                <td>{bank.nickName}</td>
                                <td className='center'><Button color='secondary' size='sm' onClick={ () => onUpdateItem(bank._id!, {...bank, bankName: `${bank.bankName} U`}) }>Update</Button></td>
                                <td className='center'><Button color='tertiary'  size='sm' onClick={ () => onRemoveItem(bank._id!) }>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    </>
    )
}

export default BankList