import { useState } from 'react'
import Button from '../Button/Button'

const Cart = () => {
    const [cart, setCart] =  useState({
        discount: .1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 2}
        ]
    })

    const handleClick = () => setCart({...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item)})

  return (
    <>
        <div>Cart</div>
        <ul>
            {cart.items.map(item => <li key={item.id}>{`${item.title} -------- ${item.quantity}`}</li>)}
        </ul>
        <Button color='secondary' onClick={handleClick} size='sm' >Add Item +</Button>
    </>
  )
}

export default Cart