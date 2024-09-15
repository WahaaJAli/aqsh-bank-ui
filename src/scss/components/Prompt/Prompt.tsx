import { ReactNode } from "react"

interface PromptProps {
  children: ReactNode
  className?: string
}

const Prompt = ({children, className}: PromptProps): JSX.Element => {
  return (
    <>
      <p className={`prompt ${className}`} >{children}</p>
    </>
  )
}

export default Prompt