import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemCount from '../components/ItemCount';
import './style.css'


const ItemListContainer = ({greeting}) => {
    
    const [cart, setCart] = useState(0);

    const array = [1,2,3,4];
    
    const handleAddOn = (quantity) => {
        console.log(quantity);
        setCart(cart+quantity);
    }

    return ( 
        <Container>
            <div className="greeting">
                {`${greeting} ${cart}`}
            </div>

            {array.map((index) => <ItemCount key={index} stock={15} initial={0} addOn={handleAddOn} />)}
        </Container>
    )
} 

export default ItemListContainer;