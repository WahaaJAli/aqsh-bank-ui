import { useState } from 'react'
import Button from '../Button/Button'

interface ExpandableTextProps {
  children: string
  maxChars?: number
}

const ExpandableText = ({ children, maxChars=20 }: ExpandableTextProps): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false)
  
  const label = isExpanded ? 'Less': 'More'
  const text = isExpanded ? children : `${children.substring(0, maxChars)}...`
  const toggle = (): void => setExpanded(!isExpanded)

  return (
    <>
      <span className='m-1'>{text}</span>
      { children.length > maxChars && <Button color='tertiary' size='sm' onClick={toggle} >{label}</Button> }
    </>
  )
}

export default ExpandableText