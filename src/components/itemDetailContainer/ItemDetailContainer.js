import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import {ItemDetail} from '../itemDetail/ItemDetail';
//Firebase
import {getFirestore, doc, getDoc} from 'firebase/firestore';
//Styles
import './ItemDetailContainer.css'

//Logic
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

//Export
export default ItemDetailContainer;