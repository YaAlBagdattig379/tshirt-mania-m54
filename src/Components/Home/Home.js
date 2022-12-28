import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart,setCart] = useState([]);

    const handleAddToCart = (selectedItem) =>{ //add to cart
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('Item aready add to cart !')
        }
       
    }

    const handleRemoveFromCart = (selectedItem) =>{// remove from cart
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id )
        setCart(rest);
        // console.log('hello delete',selectedItem)
    }
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt 
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart ={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;