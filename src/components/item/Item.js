import React from "react";
import { Link } from "react-router-dom";

export const Item = ({data}) => {
    return(
        <Link to={`/product/${data.id}`}>
            <img src={data.image} alt="..."/>
            <p>{data.title}</p>
        </Link>
    )
}

export default Item