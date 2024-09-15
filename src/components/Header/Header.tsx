import { ReactNode } from "react"
import { Link } from "../Link/Link"

interface HeaderSectionProps {
    children?: ReactNode
    heading: string
    mainText: string
}

const Header = (): JSX.Element => {
    return (
        <>
        <div className="mx-auto width-90">
            <div className="header">
                <div className="flex-row">
                    <a className="icon icon-tnsa" href='/' ></a>
                    <a className="icon icon-tnsa-text" href='/' ></a>
                </div>
                <div>
                    <Link href="https://Google.com" >Subscribe</Link>
                    <Link href="https://Google.com" >Courses</Link>
                    <Link href="https://Google.com" >Learning Paths</Link> 
                    <Link href="https://Google.com" >Forum</Link>
                    <Link href="https://Google.com" >Contact</Link>
                </div>
            </div>
        </div>
        </>
    )
}

const HeaderSection = ({heading, mainText, children}: HeaderSectionProps): JSX.Element => {
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

export {Header, HeaderSection}