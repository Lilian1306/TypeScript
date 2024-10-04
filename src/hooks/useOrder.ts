import {useState} from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    // Codigo para agregar items a nuestro consumo. 
    const addItem = (item: MenuItem) => {
     const itemExist = order.find(orderItem => orderItem.id === item.id )
        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : //que hace este codigo: tomar una copia de lo que ya haya en nuestra order y lo incremente en uno
                orderItem
                )
                setOrder(updateOrder)
        }else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
       }
    }


    // Codigo para remover items de nuestro consumo y hacer que nuestro button tenga funcion. 
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    
    return {
       order,
       tip, 
       setTip,
       addItem,
       removeItem,
       placeOrder
    }
}