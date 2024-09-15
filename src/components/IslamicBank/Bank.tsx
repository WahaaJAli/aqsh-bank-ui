import { useEffect, useState } from "react"
import BankAdd from "./BankAdd"
import BankList from "./BankList"
import BankService, { IBank } from "../../services/BankService"
import Prompt from "../Prompt/Prompt"
import useBanks from "../../hooks/useBanks"


const Bank = () => {
	useEffect( () => { document.title = "Premier Islamic Banking" }, [])

	const { banks, error, isLoading, setBank, setError } = useBanks()
	const [ addError, setAddError ] = useState<string>()
	const handleSelectBank = (item: string) => console.log(item)
	
	const createBank = ({ bic, name, nickName }: IBank): void => {
		const originalBanks: IBank[] = [...banks]

		const newBank: IBank = { bic, name, nickName }
		setBank([newBank, ...banks])

		BankService.create<IBank>(newBank)
			.then(({data: newBank}): void => {
				setBank([newBank, ...banks])
				setAddError("")
			})
			.catch(error => {
				setBank(originalBanks)
				setAddError(error.response.data.message || error.message)
			})
	}

	const updateBank = (id: string, {bic, name, nickName}: IBank): void => {
		const originalBanks = [...banks]
		setBank(banks.map(bank => bank._id === id ? {...bank, name} : bank))

		BankService.getById<IBank>(id)
			.then(({data: prevBank}): void => {
				const updatedBank: IBank = { ...prevBank, name }

				BankService.update<IBank>(prevBank._id!, updatedBank)
					.then(() => setError(""))
					.catch(error => {
						setBank(originalBanks)
						setError(error.response.data.message || error.message)
					})
				})
			.catch(error => {
				setBank(originalBanks)
				setError(error.response.data.message || error.message)
			})
	}

	const deleteBank = (id: string): void => {
		const originalBanks = [...banks]
		setBank(banks.filter(bank => bank._id !== id))

		BankService.delete<IBank>(id)
			.catch(error => {
				setBank(originalBanks)
				setError(error.message)
			})
	}

	return (
	<>
		<div className="flex-row mt-7">
			<div className=" flex-row justify-center width-30 mx-2-h">
				<BankAdd onAddItem={ createBank } error={ addError } ></BankAdd>
				{  isLoading && <Prompt className="list-prompt">Please wait. Fetching Details...</Prompt> }
			</div>
			<div className="flex-column justify-start width-60 mx-2-h">
				<BankList error={error} items={banks} isLoading={isLoading} onRemoveItem={deleteBank} onSelectItem={handleSelectBank} onUpdateItem={updateBank} ></BankList>
			</div>

		</div>
	</>
	)
}

export default Bank