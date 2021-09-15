import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from '../components/ItemList';
import { getFetch } from '../util/FuntionUtils';
import './style.css'


const ItemListContainer = ({ greeting }) => {

    const [cart, setCart] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getFetch.then(response => setItems(response))
    }, [])

    const handleAddOn = (quantity) => {
        console.log(quantity);
        setCart(cart + quantity);
    }

    return (
        <Container>
            <div className="greeting">
                {`${greeting} ${cart}`}
            </div>
            <ItemList items={items} addOn={handleAddOn} />
        </Container>
    )
}

export default ItemListContainer;