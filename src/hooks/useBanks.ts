import { AxiosError, CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import BankService, { IBank } from '../services/BankService'

const useBanks = () => {
    useEffect(() => { getBanks() }, [])

    const [banks, setBank] = useState<IBank[]>([])
    const [error, setError] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(true)

    const getBanks = async () => {
        const { request, cancel } = BankService.get<IBank>()

        request
            .then(({data: banks}) => setBank(banks))
            .catch(err => {
                if(err instanceof CanceledError) return
                setError((err as AxiosError).message)
            })
            .finally(() => setLoading(false))
        
        return () => cancel()
    }

    return { banks, error, isLoading, setBank, setError, setLoading }
}

export default useBanks