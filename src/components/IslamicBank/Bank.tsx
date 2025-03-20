import { useEffect } from "react"
import useAddBanks from "../../hooks/useAddBanks"
import useBanks from "../../hooks/useBanks"
import Button from "../Button/Button"
import Prompt from "../Prompt/Prompt"
import BankAdd from "./BankAdd"
import BankList from "./BankList"

const Bank = () => {
  useEffect(() => { document.title = "Premier Islamic Banking" }, [])

  const { data: banks, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useBanks(10)
  const createBank = useAddBanks()

  return (
    <div className="flex-row mt-2">
      <div className="flex-row justify-center width-30 mx-2-h">
        <BankAdd onAddItem={createBank.mutate} error={createBank.error?.message} />
        {isLoading && <Prompt className="list-prompt">Please wait. Fetching Details...</Prompt>}
      </div>
      
      <div className="flex-column justify-start width-60 mx-2-h">
        <BankList items={banks?.pages.flatMap(({ banks }) => banks) || []} isLoading={isLoading} onSelectItem={() => {}} />
        {hasNextPage && (
          <div className="action-btn__container">
            <Button color="secondary" size="md" onClick={fetchNextPage}>
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bank