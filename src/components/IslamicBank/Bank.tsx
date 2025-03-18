import { useEffect, useState } from "react"
import BankAdd from "./BankAdd"
import BankList from "./BankList"
import BankService, { FetchBankResponse, IBank } from "../../services/BankService"
import Prompt from "../Prompt/Prompt"
import useBanks from "../../hooks/useBanks"
import Button from "../Button/Button"
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"

type InfiniteBankData = InfiniteData<FetchBankResponse> | undefined

const Bank = () => {
  useEffect(() => { document.title = "Premier Islamic Banking" }, [])

  const queryClient = useQueryClient()
  const { data: banks, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useBanks(10)
  const [addError, setAddError] = useState<string>()

  const createBank = useMutation<IBank, Error, IBank, InfiniteBankData>({
    mutationFn: async (newBank: IBank) => (await BankService.create<IBank>(newBank)).data,
    
    onMutate: async (newBank: IBank) => {
      setAddError('')
      await queryClient.cancelQueries({ queryKey: ['banks'] })
      const previousBanks = queryClient.getQueryData<InfiniteData<FetchBankResponse>>(['banks'])

      const getPages = (oldData: InfiniteData<FetchBankResponse>) => 
        oldData.pages.map((page, i) => i === 0 ? { ...page, banks: [newBank, ...page.banks] } : page)

      queryClient.setQueryData(['banks'], (oldData: InfiniteBankData) =>
        oldData ? { ...oldData, pages: getPages(oldData) } : oldData
      )
      return previousBanks
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['banks'] }),

    onError: async (error, _newBank, previousBanks) => {
      if (previousBanks) queryClient.setQueryData(['banks'], previousBanks)
      setAddError(error.message)
    }
  })

  return (
    <div className="flex-row mt-2">
      <div className="flex-row justify-center width-30 mx-2-h">
        <BankAdd onAddItem={createBank.mutate} error={addError} />
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