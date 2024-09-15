import { LinkIcon, Link } from "../Link/Link"

const Footer = (): JSX.Element => {
    let searchText = "Opposite Mall of Multan, Multan, Punjab, Pakistan"
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`

    return (
        <>
        <div className="mx-auto width-90">
            <div className="footer">
                <div className="flex-column">
                    <Link className="" href="https://Google.com" >+92-309-467-0000</Link>
                    <Link className="mt-1" href="https://Google.com" >thenationalservicesacademy@gmail.com</Link>
                </div>
                
                <div className="">
                    <p className="font-bold">&copy; The National Services Academy</p>
                    <Link className="mt-1" href={searchUrl} >{searchText}</Link>
                </div>
                
                <div className="flex-row">
                    <LinkIcon className="mr-2" href="https://Google.com" icon="icon-youtube" />
                    <LinkIcon className="mr-2" href="https://Google.com" icon="icon-whatsapp" />
                    <LinkIcon className="mr-2" href="https://Google.com" icon="icon-facebook" />
                    <LinkIcon className="mr-2" href="https://Google.com" icon="icon-twitter" />
                    <LinkIcon href="https://Google.com" icon="icon-instagram" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer