import React from 'react';
import Item from '../Item';

const ItemList = ({items, addOn}) => {
    return (
        items.map(item => <Item item={item} addOn={addOn}/>)
    )
}

export default ItemList;