import React, { useEffect, useState } from 'react';
import {Image} from 'react-bootstrap'
import { useCartContext } from '../../contexts/CartContext';
import cartImage from './cart-image.png'


const CartWidget = () => {
    
    const {cart} = useCartContext();

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        console.log("el carrito",cart)
        let cantidad = 0;
        cart.map(product => cantidad = cantidad + product.quantity);
        setQuantity(cantidad);
    }, [cart])

    return (
        <div>
            <Image src={cartImage} />
            {quantity}
        </div>
    )
}

export default CartWidget;