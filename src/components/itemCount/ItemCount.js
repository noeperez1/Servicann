import React, { useState } from "react";

export const ItemCount = (initial, stock, onAdd) => {
    const [count, setCount] = useState(initial)

    const decrementar = () => {
        setCount(count - 1);
    }

    const incrementar = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <button disabled={count <= 1} onClick={decrementar}> - </button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}> + </button>
        
            <div>
                <button disabled={stock <= 0} onClick={()=>onAdd(count)}>Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount