import { useState } from "react"

interface ListProps {
    items: string[]
    heading: String
    onSelectItem: (item: string, index: number) => void
}

const List = ({items, heading, onSelectItem}: ListProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState(-1)

    const handleSelectedItem = (item: string, index: number): void => {
        setSelectedItem(index)
        onSelectItem(item, index)
    }

    return (
        <>
        <h2 className="p-1 mt-1">{heading}</h2>
        {items.length === 0 && "No Item Found!"}
        <ul className="mb-4">
            {items.map((item, index) => <li 
                className= { selectedItem === index ? "list-group-item active" : "list-group-item"} 
                onClick={() => {handleSelectedItem(item, index)}}
                key={index}>{item}</li>)}
        </ul>
        </>
    )
}

export default List