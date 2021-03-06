import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import ItemCount from "../ItemCount";
import './style.css'

const ItemDetail = ({product}) => {
    return (
        <Container className="container-card">
            <Card>
                <Card.Header><Card.Text>{product?.description}</Card.Text></Card.Header>
                <Card.Body>
                    <Image src={product?.image} rounded />
                </Card.Body>
                <div className="count">
                    <ItemCount item={product}/>
                </div>
            </Card>
        </Container>
    )
}

export default ItemDetail;