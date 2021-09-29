import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import ItemList from '../components/ItemList';
import { getFetch, getFetchByCategory } from '../util/FuntionUtils';
import './style.css'


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        console.log(id)
        if (id) {
            getFetchByCategory(id)
                .then(response => setItems(response));
        } else {
            getFetch.then(response => setItems(response));
        }
    }, [id])

    return (
        <Container>
            <ItemList items={items} />
        </Container>
    )
}

export default ItemListContainer;