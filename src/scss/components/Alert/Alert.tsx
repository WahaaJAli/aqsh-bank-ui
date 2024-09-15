import { ReactNode, AnimationEvent } from "react"

type colors = 'primary' |'secondary' | 'bright' | 'blue' | 'pink' | 'red' | 'purple' | 'green'
interface AlertProps {
    children: ReactNode
    color?: colors
    onAnimationEnd?: (e: AnimationEvent<HTMLDivElement>) => void
    onClose: () => void
}

const Alert = ({children, color='primary', onAnimationEnd, onClose}: AlertProps): JSX.Element => {

    return (
        <>
            <div className={`alert animated bg-${color} text-${color}`} onAnimationEnd={ onAnimationEnd } >{ children }
                <div className={`icon-close-lg cursor-pointer filter-${color}`} onClick={ onClose }></div>
            </div>
        </>
    )
}

export default Alert