import React from "react";
import { Card, Container, Image } from "react-bootstrap";

const ItemDetail = ({product}) => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Text>{product?.description}</Card.Text>
                    <Image src={product?.image} rounded />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetail;