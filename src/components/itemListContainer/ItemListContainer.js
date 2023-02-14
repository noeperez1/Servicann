import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {ItemList} from '../itemList/ItemList'

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'listaProductos');
        if(categoryId){
            const queryFilter = query(queryCollection, where ('category','==',categoryId))
            getDocs(queryFilter).then(res=>setData(res.docs.map(res=>({id:res.id, ...res.data()}))))
        }
        else{ 
            getDocs(queryCollection)
            .then(res=> setData(res.docs.map(res => ({id: res.id, ...res.data()}))))
        }
    
        
    },[categoryId])

    return(
        <ItemList data={data}/>
    )
}