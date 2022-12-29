import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialOne = ({house}) => {
    const context = useContext(RingContext);
    return (
        <div>
            <h4>SpecialOne</h4>
            <p>House : {house}</p>
             <h4>Gifts : {context}</h4>{/*  used useContext*/}
        </div>
    );
};

export default SpecialOne;