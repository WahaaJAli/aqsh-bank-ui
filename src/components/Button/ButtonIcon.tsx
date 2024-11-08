import { CustomIcons } from "../../icons/Icons"

type Skin = "primary" | "secondary" | "tertiary" | "input"
type Sizes = "lg" | "md" | "sm"

interface ButtonIconProps {
    className?: string
    icon?: CustomIcons
    size?: Sizes
    skin?: Skin
    onClick: () => void
}

const ButtonIcon = ({className, icon='close', size='sm', skin='input', onClick}: ButtonIconProps): JSX.Element => {

    return (
        <button className={`btn-icon--${skin} btn-icon--${skin}-${size} icon-${icon} ${className} animated`}
            onClick={onClick} type='button'>
        </button>
    )
}

export default ButtonIcon