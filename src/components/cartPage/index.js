import { useSelector } from "react-redux";
import emptyCart from "../../Assets/empty cart.png"
import Card from "../card";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/adcart";
import { useState } from "react";

function CartPage(props) {

    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { api } = props


    return <div className='api-cards-main'>

        {cart.map((item) => {
            return <div className='api-cards'>
                <Card item={item} />
                <div className='chat-btn' onClick={() => dispatch(removeFromCart(api))}>Remove From Cart</div>

            </div>

        })}



    </div>


}
export default CartPage;