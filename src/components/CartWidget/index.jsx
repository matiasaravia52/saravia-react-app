import React from 'react';
import {Image} from 'react-bootstrap'
import cartImage from './cart-image.png'


const CartWidget = () => {
    return (
        <div>
            <Image src={cartImage} />
        </div>
    )
}

export default CartWidget;