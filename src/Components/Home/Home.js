import React from 'react';
import useTShirts from '../../hooks/useTShirts';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();

    return (
        <div className='home-container'>
            <div className="tShirt-container">
                <p>total nums : {tShirts.length} </p>
            </div>
            <div className="cart-container">
                {/* <Cart></Cart> */}
            </div>
        </div>
    );
};

export default Home;