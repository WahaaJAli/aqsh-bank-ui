import { z } from "zod"

const BankSchema = z.object({ 
    bic: z.string().length(4),
    bankName: z.string().min(8).max(40).regex(/^[a-zA-Z\s]+$/, { message: `Please provide a bank without special characters or numbers.` })
})

export default BankSchema