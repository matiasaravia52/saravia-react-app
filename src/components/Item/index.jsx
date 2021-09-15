import React from 'react';
import { Card, Image } from 'react-bootstrap';
import ItemCount from '../ItemCount';
import './style.css'


const Item = ({ item, addOn }) => {
    return (
        <Card className="item">
            <Card.Body>
                <Card.Text>{item.description}</Card.Text>
                <Image className="image" src={item.image} rounded />
                <ItemCount addOn={addOn} />
            </Card.Body>
        </Card>
    )
}

export default Item;