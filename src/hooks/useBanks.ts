import { IBank } from '../services/BankService'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface BankQuery { 
  page: number
  pageSize: number
}

const useBanks = ({ page, pageSize }: BankQuery) => {
  const getBanks = async () => {
    const response = await axios.get<{ banks: IBank[], totalPages: number }>(
      'http://localhost:2123/banks', 
      { params: { page, pageSize } }
    )
    return response.data
  }
  
  const { data, error, isLoading } = useQuery({
    queryKey: ['banks', { page, pageSize }],
    queryFn: () => getBanks(), 
    staleTime: 10 * 1000,
    keepPreviousData: true
  })

  return { data: data?.banks || [], totalPages: data?.totalPages , error, isLoading }
}

export default useBanks