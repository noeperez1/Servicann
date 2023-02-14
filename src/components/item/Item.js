import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export const Item = ({title, price, category, image, description}) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item)=>item.id === id);

            if(isItemsFound){
                return currItems.map((item)=>{
                    if(item.id===id){
                        return{...item, quantity: item.quantity + 1};}
                        else{
                            return item;
                        }
                    });
                }else{
                    return [...currItems, {id, quantity: 1, price}]
                }
            });

        };
    

    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item)=>item.id === id)?.quantity ===1){
                return currItems.filter((item) => item.id !== id);
            }else {
                return currItems.map((item)=>{
                    if(itemm.id===id){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const getQuantityById = (id) => {
        return cart.find((item)=>item.id === id) ?.quantity || 0
    };

    const totalQuantity = getQuantityById(id);

    return (
    <div>

        {
            totalQuantity > 0 && (
            <div>{totalQuantity}</div>
        )
        }

        <div>
        <CardGroup>
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description} 
            <p>${price}</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            {image}
            <p>{category}</p>
        </Card.Footer>
        </Card>

    </CardGroup>

        </div>

        {
            totalQuantity === 0 ? (
                <button onClick={()=>addToCart()}>Agregar al carrito</button>
            ) : (
                <button onClick={()=>addToCart()}>Agregar más</button>
            )
        }

        {
            totalQuantity > 0 && (
                <button onClick={()=>removeItem(id)}>Eliminar producto</button>
            )
        }
    </div>
    )

}

