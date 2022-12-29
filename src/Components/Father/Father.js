import React from 'react';
import Brother from '../Brother/Brother';
import Me from '../Me/Me';
// import MySelf from '../Myself/Myself';
import Sister from '../Sister/Sister';
// import Brother from '../Brother/Brother';
// import MySelf from '../Myself/Myself';
// import Sister from '../Sister/Sister';
import './Father.css'
const Father = ({house,ornaments}) => {
    return (
        <div className='father'>
            <h3>Father </h3>
            <p>House : {house}</p>
            <div className='father-child'>
               <Me house={house} ornaments={ornaments}></Me>
               <Brother house={house}></Brother>
               <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;