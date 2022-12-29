import React from 'react';
import './Uncle.css'
const Uncle = ({house}) => {
    return (
        <div className='uncle'>
            <h3>Uncle</h3>
            <p>House : {house}</p>
        </div>
    );
};

export default Uncle;