import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            setCart(
                cart.map(((item) =>
                    item.id === product.id

                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                )
            );
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const addQuantity = (product) => {
        setCart(
            cart.map((item) => item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        );
    }

    const subQuantity = (product) => {
        setCart(
            cart.map((item) => item.id === product.id
                ? {
                    ...item, quantity: item.quantity > 1
                        // Prevent quantity from going below 1
                        ? item.quantity - 1
                        : 1
                }
                : item
            )
        );
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, addQuantity, subQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};



