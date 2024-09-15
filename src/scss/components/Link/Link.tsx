import { ReactNode } from "react"

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
    icon: string
}

const LinkIcon = ({href, icon, className}: LinkIconProps): JSX.Element => {
    return (
        <>
        <a className={`animation-wave ${className}`} href={href} target="_blank" >
            <div className={`icon icon--primary ${icon}`}></div>
        </a>
        </>
    )
}

export { Link, LinkIcon }