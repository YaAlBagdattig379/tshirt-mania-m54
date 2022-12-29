import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
   // conditional rendering options
   // ..1.element variable
   // ..2.ternary operator
   // ..3. && operator (short hand)
   // ..4. || operator (short hand)
   let command ; // ..1.element variable 
   if(cart.length === 0){
     command = <p>Please add at least one Item.</p>
   }
   else if(cart.length === 1){
     command = <p>Please add more Item.</p>
   }
   else{
     command = <p>Thanks for adding Items.</p>
   }
    return (
        <div className='cart'>
            <h2>Item selected : {cart.length}</h2>
           
            {
                cart.map(tShirt=><p>
                    {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt)} className='delete-btn'style={{cursor:'pointer'}}>X</button>
                    </p>)
            }
            {/*.4...|| operator (short hand)*/}
            {cart.length ===0 || <p className='orange'>yeah you are buying something .</p>}
            {/*.3..&& operator (short hand)*/}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal </h3>
                <p>tin jok gift ki diba..</p>
                </div>}
            {command}{/*1.element variable*/} 
            {cart.length !== 4 ? <p>Keep adding...</p> : <button>Remove items</button>}{/*.2..ternary operator*/}
            {cart.length === 4 && <button className='orange'>Review items</button>}
        </div>
    );
};

export default Cart;