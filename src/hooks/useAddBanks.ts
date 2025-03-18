import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"
import BankService, { FetchBankResponse, IBank } from "../services/BankService"
import { CACHE_KEY_BANKS } from "./Contants"

type InfiniteBankData = InfiniteData<FetchBankResponse> | undefined

const useAddBanks = () => {
  const queryClient = useQueryClient()

  return useMutation<IBank, Error, IBank, InfiniteBankData>({
    mutationFn: async (newBank: IBank) => (await BankService.create<IBank>(newBank)).data,
    
    onMutate: async (newBank: IBank) => {
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_BANKS })
      const previousBanks = queryClient.getQueryData<InfiniteData<FetchBankResponse>>(CACHE_KEY_BANKS)

      const getPages = (oldBanks: InfiniteData<FetchBankResponse>) => 
        oldBanks.pages.map((page, i) => i === 0 ? { ...page, banks: [newBank, ...page.banks] } : page)

      queryClient.setQueryData(CACHE_KEY_BANKS, (oldBanks: InfiniteBankData) =>
        oldBanks ? { ...oldBanks, pages: getPages(oldBanks) } : oldBanks
      )
      return previousBanks
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: CACHE_KEY_BANKS }),

    onError: async (_error, _newBank, previousBanks) => {
      if (previousBanks) queryClient.setQueryData(CACHE_KEY_BANKS, previousBanks)
    }
  })
}

export default useAddBanks