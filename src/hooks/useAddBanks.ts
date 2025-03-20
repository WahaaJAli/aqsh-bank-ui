import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"
import BankService, { FetchBankResponse, IBank } from "../services/BankService"
import { CACHE_KEY_BANKS } from "./Contants"

type InfiniteBankData = InfiniteData<FetchBankResponse>

const useAddBanks = () => {
  const queryClient = useQueryClient()

  return useMutation<IBank, Error, IBank, InfiniteBankData>({
    mutationFn: BankService.create,
    
    onMutate: async (newBank: IBank) => {
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_BANKS })
      
      const previousBanks = queryClient.getQueryData<InfiniteBankData>(CACHE_KEY_BANKS)
      if (!previousBanks) return previousBanks
      
      queryClient.setQueryData(CACHE_KEY_BANKS, {...previousBanks, 
        pages: previousBanks.pages.map((page, i) => i === 0 ? { ...page, banks: [newBank, ...page.banks] } : page)})

      return previousBanks
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: CACHE_KEY_BANKS }),

    onError: async (_error, _newBank, previousBanks) => {
      if (previousBanks) queryClient.setQueryData(CACHE_KEY_BANKS, previousBanks)
    }
  })
}

export default useAddBanks