import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './style.css'


const Item = ({ item, addOn }) => {
    return (
        <Card className="item">
            <Card.Body>
                <Link to={`/detalle/${item.id}`}>
                    <Card.Text>{item.description}</Card.Text>
                    <Image className="image" src={item.image} rounded />
                </Link>
                <ItemCount addOn={addOn} />
            </Card.Body>
        </Card>
    )
}

export default Item;