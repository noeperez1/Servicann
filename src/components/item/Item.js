import React from "react";
//Routes
import { Link } from "react-router-dom";
//Styles
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './Item.css'

//Logic
export const Item = ({ data }) => {

    return (
    <>
        <CardGroup>
            <Card className="Card">
            <Card.Img variant="top" src={data.image} className="img"/>
            <Card.Body>
                <Card.Title className="card-title">|{data.title}</Card.Title>
                <Card.Text >
                <p className="card-price">Precio: ${data.price}</p>
                <p className="card-description">Info. del producto: {data.description}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="footer-card">
            <Link className="Link" to={`/products/${data.id}`}><i class="bi bi-arrow-bar-right">Ver detalle del producto</i>
            </Link>
            </Card.Footer>
            </Card>
        </CardGroup>

    </>
    );
};


//Exports
export default Item;
