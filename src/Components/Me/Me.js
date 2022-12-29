import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const Me = ({house,ornaments}) => {
    return (
        <div>
            <h4>Me</h4>
            <p>House : {house}</p>
            <SpecialOne house = {house} ornaments={ornaments}></SpecialOne>
        </div>
    );
};

export default Me;