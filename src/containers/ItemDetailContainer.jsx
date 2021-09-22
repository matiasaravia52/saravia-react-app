import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../components/ItemDetail";
import { getFetchOne } from "../util/FuntionUtils";

const ItemDetailContainer = ({addOn}) => {

    const [product, setProduct] = useState();


    let { id } = useParams();

    useEffect(() => {
        getFetchOne(id)
            .then(product =>setProduct(product))  
    }, [])


    return (
        <ItemDetail product={product} addOn={addOn}/>
    )
} 

export default ItemDetailContainer;