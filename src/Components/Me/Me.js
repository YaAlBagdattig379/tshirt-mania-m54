import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const Me = ({house}) => {
    return (
        <div>
            <h4>Me</h4>
            <p>House : {house}</p>
            <SpecialOne house = {house}></SpecialOne>
        </div>
    );
};

export default Me;