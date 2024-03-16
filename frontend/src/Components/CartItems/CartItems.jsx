import React, { useContext } from "react";
import './CartItem.css';
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {

    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return (
        <div className="cartitems">
            
        </div>
    )
}

export default CartItems;