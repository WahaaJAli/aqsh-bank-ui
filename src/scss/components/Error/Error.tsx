import { ReactNode } from "react"
import Prompt from "../Prompt/Prompt"

interface ErrorProps {
  children: ReactNode
}

const Error = ({ children }: ErrorProps): JSX.Element => {
  return (
    <>
      <Prompt className='error-prompt animated'>{children}</Prompt>
    </>
  )
}

export default Error