import React from 'react';
import {useTShirts} from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [tShirts,setTShirts] = useTShirts();
    // const [tShirts,setTShirts] = useTShirts();
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                   {tShirts.length}
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;