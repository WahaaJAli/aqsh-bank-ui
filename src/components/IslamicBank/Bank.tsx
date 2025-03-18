import { useEffect, useState } from "react"
import BankAdd from "./BankAdd"
import BankList from "./BankList"
import BankService, { FetchBankResponse, IBank } from "../../services/BankService"
import Prompt from "../Prompt/Prompt"
import useBanks from "../../hooks/useBanks"
import Button from "../Button/Button"
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"

interface AddBankContext {
  previousBanks?: InfiniteData<FetchBankResponse>
}

const Bank = () => {
  useEffect(() => { document.title = "Premier Islamic Banking" }, [])

  const queryClient = useQueryClient()
  const { data: banks, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useBanks(10)
  const [addError, setAddError] = useState<string>()

  const createBank = useMutation<IBank, Error, IBank, AddBankContext>({
    mutationFn: async (newBank: IBank) => {
      const response = await BankService.create<IBank>(newBank)
      return response.data
    },

    onMutate: async (newBank) => {
      setAddError('')
      await queryClient.cancelQueries({ queryKey: ['banks'] })
      const previousBanks = queryClient.getQueryData<InfiniteData<FetchBankResponse>>(['banks'])

      queryClient.setQueryData(['banks'], (oldData: InfiniteData<FetchBankResponse> | undefined) => {
        if (!oldData) return oldData
        return {...oldData, pages: oldData.pages.map((page, index) => index === 0 ? { ...page, banks: [newBank, ...page.banks] } : page)}
      })
      return { previousBanks }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banks'] })
    },

    onError: (error, _newBank, context) => {
      if (context?.previousBanks) queryClient.setQueryData(['banks'], context.previousBanks)
    }
  })

  return (
    <>
      <div className="flex-row mt-2">
        <div className="flex-row justify-center width-30 mx-2-h">
          <BankAdd onAddItem={createBank.mutate} error={addError} ></BankAdd>
          {isLoading && <Prompt className="list-prompt">Please wait. Fetching Details...</Prompt>}
        </div>
        <div className="flex-column justify-start width-60 mx-2-h">
          <BankList items={banks?.pages.flatMap(page => page.banks) || []} isLoading={isLoading} onSelectItem={(_item: string) => {}} ></BankList>
          {hasNextPage &&
            <div className="action-btn__container">
              <Button color="secondary" size="md" onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>
            </div>
          }
        </div>

      </div>
    </>
  )
}

export default Bank