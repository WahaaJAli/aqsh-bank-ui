import { useInfiniteQuery } from '@tanstack/react-query'
import BankService, { FetchBankResponse } from '../services/BankService'
import { CACHE_KEY_BANKS } from './Contants'

const useBanks = (pageSize?: 10) => {
  return useInfiniteQuery({
    queryKey: CACHE_KEY_BANKS,
    staleTime: 10 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage: FetchBankResponse) => lastPage.nextPage,
    queryFn: ({ pageParam = 1 }) => BankService.get<FetchBankResponse>({ pageParam, pageSize })
  })
}

export default useBanks