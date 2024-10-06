import { ReactNode } from "react"
import { CustomIcons } from "../../icons/Icons"

interface LinkProps {
    className?: string
    href: string
    children: ReactNode
}

const Link = ({href, className, children}: LinkProps): JSX.Element => {
    return (
        <a className={`link-text ${className}`} href={href} target="_blank">{children}</a>
    )
}

interface LinkIconProps {
    className?: string
    href: string
    icon: CustomIcons
}

const LinkIcon = ({href, icon, className}: LinkIconProps): JSX.Element => {
    return (
        <>
        <a className={`animation-wave ${className}`} href={href} target="_blank" >
            <div className={`icon icon--primary icon-${icon}`}></div>
        </a>
        </>
    )
}

export { Link, LinkIcon }