import { ReactNode } from "react"
import { Link } from "../Link/Link"

interface CardProps {
    banner: string
    children: ReactNode
    heading: string
    href: string
    linkText: string
}

const Card = ({banner, children, heading, href, linkText}: CardProps): JSX.Element => {
    return (
        <>
        <div className="card">
            <div>
                <span className={`banner banner-${banner}`} />
            </div>

            <div className="card__body">
                <h6 className="h6">{heading}</h6>
                <p>{children}</p>
                <Link className="bottom" href={href}>{linkText}</Link>
            </div>
        </div>
        </>
    )
}


type colors = 'primary' |'secondary' | 'bright' | 'blue' | 'pink' | 'red' | 'purple' | 'green'
interface CardPersonalProps {
    children: ReactNode
    color: colors
    heading: string
}

const CardPersonal = ({color, children, heading}: CardPersonalProps): JSX.Element => {
    return (
        <>
        <div className={`card-personal mx-2 my-4 shine-${color} border-${color}`}>
            <h3 className={`h3 card__header text-${color}`}>{heading}</h3>
            <span className="card__body">{children}</span>
        </div>
        </>
    )
}

export {Card, CardPersonal}