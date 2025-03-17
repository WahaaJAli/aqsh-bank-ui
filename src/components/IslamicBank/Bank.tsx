import { useEffect, useState } from "react"
import BankAdd from "./BankAdd"
import BankList from "./BankList"
import BankService, { IBank } from "../../services/BankService"
import Prompt from "../Prompt/Prompt"
import useBanks from "../../hooks/useBanks"
import Button from "../Button/Button"


const Bank = () => {
	useEffect(() => { document.title = "Premier Islamic Banking" }, [])

  const pageSize = 10
  const [page, setPage] = useState(1)
	const { data: banks, totalPages, error, isLoading } = useBanks({ page, pageSize })
	const [ addError, setAddError ] = useState<string>()
	const handleSelectBank = (item: string) => console.log(item)
	
	// const createBank = ({ bic, bankName, nickname }: IBank): void => {
	// 	const newBank: IBank = { bic, bankName, nickname }
	// 	setBank([newBank, ...banks])

	// 	BankService.create<IBank>(newBank)
	// 		.then(({data: newBank}): void => {
	// 			setBank([newBank, ...banks])
	// 			setAddError("")
	// 		})
	// 		.catch(error => {
	// 			setBank(originalBanks)
	// 			setAddError(error.response.data.message || error.message)
	// 		})
	// }

	// const updateBank = (id: string, {bic, bankName, nickname}: IBank): void => {
	// 	setBank(banks.map(bank => bank._id === id ? {...bank, bankName} : bank))

	// 	BankService.getById<IBank>(id)
	// 		.then(({data: prevBank}): void => {
	// 			const updatedBank: IBank = { ...prevBank, bankName }

	// 			BankService.update<IBank>(prevBank._id!, updatedBank)
	// 				.then(() => setError(""))
	// 				.catch(error => {
	// 					setBank(originalBanks)
	// 					setError(error.response.data.message || error.message)
	// 				})
	// 			})
	// 		.catch(error => {
	// 			setBank(originalBanks)
	// 			setError(error.response.data.message || error.message)
	// 		})
	// }

	// const deleteBank = (id: string): void => {
	// 	setBank(banks.filter(bank => bank._id !== id))

	// 	BankService.delete<IBank>(id)
	// 		.catch(error => {
	// 			setBank(originalBanks)
	// 			setError(error.message)
	// 		})
	// }

	return (
	<>
		<div className="flex-row mt-2">
			<div className="flex-row justify-center width-30 mx-2-h">
				{/* <BankAdd onAddItem={ createBank } error={ addError } ></BankAdd> */}
				{  isLoading && <Prompt className="list-prompt">Please wait. Fetching Details...</Prompt> }
			</div>
			<div className="flex-column justify-start width-60 mx-2-h">
				<BankList items={banks} isLoading={isLoading} onSelectItem={handleSelectBank} ></BankList>
        <div className="action-btn__container">
          <Button color="secondary" size="md" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
          <Button color="secondary" size="md" onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</Button>
        </div>
			</div>

		</div>
	</>
	)
}

export default Bank