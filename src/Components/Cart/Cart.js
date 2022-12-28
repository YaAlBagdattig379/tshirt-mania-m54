import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart)


    return (
        <div className='cart'>
            <h2>Item selected : {cart.length}</h2>
            {
                cart.map(tShirt=><p>
                    {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt)} className='delete-btn'>X</button>
                    </p>)
            }
            <h2>this is from Cart </h2>
        </div>
    );
};

export default Cart;