import React, { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addOn = (item, quantity) => {
        item.quantity = quantity;
        const newCart = cart.filter(elementCart => elementCart.id !== item.id);
        if (quantity > 0) {
            newCart.push(item);
        }
        setCart(newCart);
        console.log("carrito", newCart);
    }

    return (
        <cartContext.Provider value={{
            cart,
            addOn
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;