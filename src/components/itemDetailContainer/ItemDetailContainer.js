import {getFirestore, doc, getDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../itemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    //traer servicio de firebase 
    //buscar el dato a traer
    //traer el dato con promise

    const [data, setData] = useState ({});
    const {productId} = useParams();

    useEffect(()=>{
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, 'listaProductos', productId);
        getDoc(queryDoc).then(res=>setData({id:res.id, ...res.data()}))
    },[productId])

    return(
        <ItemDetail data={data}/>
    )

}