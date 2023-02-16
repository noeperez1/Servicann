import React, { useEffect, useState } from "react";
import {ItemDetail} from '../itemDetail/ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {productId} = useParams()

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'listaProductos', productId);
        getDoc(queryDoc)
            .then(res=>setData({id : res.id, ...res.data()}))
    },[productId])

    return(
        <ItemDetail data={data} />
    )

}

export default ItemDetailContainer;