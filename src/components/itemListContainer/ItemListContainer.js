import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import {ItemList} from '../itemList/ItemList';
//Firebase
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'; 

//Logic
export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

    useEffect(() => {
        const getData = async () => {
        const querydb= getFirestore()
    
        const queryRef = !categoryId
        
            ? collection(querydb, "listaProductos")
        
            : query(
                collection(querydb, "listaProductos"),
                where("category", "==", categoryId)
                    );
        
        const response = await getDocs(queryRef);
        
        const productos = response.docs.map((doc) => {
            const newProduct = {
                ...doc.data(),
                id: doc.id,
            };
    
            return newProduct;
                });
            setTimeout(() => {
                setData(productos);
                setLoading(false)
                }, 1000)
            };

            getData();
        
        }, [categoryId])

    return(
        <div>
            <ItemList data={data} loading={loading}/>
        </div>
    )
}

//Export
export default ItemListContainer