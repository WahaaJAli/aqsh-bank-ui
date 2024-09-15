import { FeatureStyle } from "../Feature/Feature"
import { Link } from "../Link/Link"
import { useState } from "react"
import { Header } from "../Header/Header"
import Alert from "../Alert/Alert"
import Button from "../Button/Button"
import Footer from "../Footer/Footer"
import ListPrimary from "../Lists/Lists"

const Contact = (): JSX.Element => {
    const [ selectedItem, setSelectedItem ] = useState("")

    const [ alertVisible, setAlertVisibility ] = useState(false)

    const handleSelectedItem = (item: string, index: Number): void => {
        setSelectedItem(item)
        let searchText = item
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`
        // window.open(searchUrl, '_blank')
    }

    let items: string[] = ["Multan", "Deplapur", "Haveli Lakha", "Okara", "Karachi", "Islamabad", "Lahore"].sort()
    // items = []


    return (
        <>
        <Header></Header>

        {alertVisible && selectedItem && <Alert onClose={() => setAlertVisibility(false)}>{`You have selected ${selectedItem}`}</Alert>}
        
        <div className="flex-row justify-center mt-2">
            <Button color="tertiary" size="lg" onClick={() => setAlertVisibility(true)}>Show City</Button>
        </div>

        <ListPrimary items={items} heading="Cities" onSelectItem={handleSelectedItem} />


        <div className='flex-column my-4 stripe horizon-gradient'>
            <Link href="https://Google.com" >Consectetur adipisicing elit.</Link>
            <Link className="mt-1" href="https://Google.com" >Consectetur adipisicing ducimus.</Link>
            <Link className="mt-1" href="https://Google.com" >Consectetur elit ducimus.</Link>
        </div>
        
        <div className='mb-4'>
            <input className="input" type="text" placeholder='Enter Username...'/>
        </div>
        
        <input className="input" type="text" placeholder='Enter Username...'/>

        <h1 className="h1">DevOps Guide</h1>
        <h2 className="h2">DevOps Guide</h2>
        <h3 className="h3">DevOps Guide</h3>
        <h4 className="h4">DevOps Guide</h4>
        <h5 className="h5">DevOps Guide</h5>
        <h6 className="h6">DevOps Guide</h6>

        <FeatureStyle></FeatureStyle>
        <div className="mt-n-14">
            <Footer></Footer>
        </div>
        </>
    )
}

export default Contact