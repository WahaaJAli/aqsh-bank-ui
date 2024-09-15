import { ReactNode } from "react"

type colors = "primary" | "secondary" | "tertiary"
type sizes = "lg" | "md" | "sm"

interface ButtonProps {
    children: ReactNode
    color: colors
    disabled?: boolean
    size: sizes
    type?: "button" | "reset" | "submit"
    onClick: () => void
}

const Button = ({children, color, disabled, size, type='button', onClick}: ButtonProps): JSX.Element => {
    return (
        <>
        <button
            className={`btn--${color} btn--${color}-${size}`}
            onClick={onClick} disabled={disabled} type={type}> {children}
        </button>
        </>
    )
}

export default Button