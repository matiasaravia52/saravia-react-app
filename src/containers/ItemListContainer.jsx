import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css'


const ItemListContainer = ({greeting}) => {
    return ( 
        <Container>
            <div className="greeting">
                {greeting}
            </div>
        </Container>
    )
} 

export default ItemListContainer;