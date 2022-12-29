import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h1>GrandDada</h1>
            <section style={{display:'flex'}}>
                 <Father house={house}></Father>
                 <Uncle house={house} className="uncle"></Uncle>
                 <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;