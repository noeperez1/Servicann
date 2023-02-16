import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const Item = ({ data }) => {
    return (
    <>
        <CardGroup>
        <Link to={`/product/${data.id}`}>
            <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                <p>Precio: {data.price}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>{data.description}</Card.Footer>
            </Card>
        </Link>
        </CardGroup>

    </>
    );
};

export default Item;
