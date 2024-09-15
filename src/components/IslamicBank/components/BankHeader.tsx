import { ReactNode } from "react"
import { Link } from "../../Link/Link"

interface HeaderSectionProps {
    children?: ReactNode
    heading: string
    mainText: string
}

const BankHeader = (): JSX.Element => {
    return (
        <>
        <div className="mx-auto my-2 width-70">
            <div className="header">
                <div className="flex-row">
                    <a href='/' ><i>THE PREMIRE ISLAMIC BANKING</i></a>
                </div>
                <div>
                    <Link href="/" >Islamic Banks</Link>
                    <Link href="https://Google.com" >Funds Transfer</Link>
                    <Link href="https://Google.com" >Accounts</Link>
                </div>
            </div>
        </div>
        </>
    )
}

const BankHeaderSection = ({heading, mainText, children}: HeaderSectionProps): JSX.Element => {
    return (
        <>
        <div className="align-center flex-column">
            <span className="gradient-text text-wide">{heading}</span>
            <span className="font-bold text-3xl">{mainText}</span>
            {children && <span className="paragraph-center text-1xl">{children}</span>}
        </div>
        </>
    )
}

export { BankHeader, BankHeaderSection }