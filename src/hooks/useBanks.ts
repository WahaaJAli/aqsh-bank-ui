import { IBank } from '../services/BankService'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

interface FetchBankResponse {
  banks: IBank[]
  nextPage: number | null
}

const useBanks = () => {
  const fetchBanks = ({pageParam = 1}) => axios
    .get<FetchBankResponse>('http://localhost:2123/banks', { params: { page: pageParam, pageSize: 10 }})
    .then(response => response.data)
  
  return useInfiniteQuery({
    keepPreviousData: true,
    queryKey: ['banks'],
    staleTime: 10 * 1000,
    getNextPageParam: lastPage => lastPage.nextPage,
    queryFn: fetchBanks, 
  })
}

export default useBanks