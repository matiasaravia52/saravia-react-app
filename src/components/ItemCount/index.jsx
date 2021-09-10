import React, { useState } from 'react';
import { ButtonGroup, InputGroup, Button, Card } from 'react-bootstrap';
import './style.css'


const ItemCount = ({stock=10, initial=1, addOn}) => {
    
    const [count, setCount] = useState(initial);

    const handleCount = (value) => {
        if(value < 0) {
            if (count+value >= initial) {
                setCount(count+value);
            }
        } else {
            if (count+value <= stock) {
                setCount(count+value);
            }
        }
    }

    return (
        <div className="item-count">
            <Card>
                <Card.Body>
                    <Card.Text>Camisa prueba</Card.Text>
                    <ButtonGroup className="button-group justify-content-center">
                        <Button variant="primary" onClick={() => handleCount(-1)}>-</Button>
                        <InputGroup.Text className="text-center text" id="btnGroupAddon">{count}</InputGroup.Text>
                        <Button variant="primary" onClick={() => handleCount(1)}>+</Button>
                    </ButtonGroup>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-primary" className="button" onClick={() => addOn(count)} >Agregar al Carro</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ItemCount;