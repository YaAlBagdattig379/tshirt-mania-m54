import {createContext, React,useState} from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('ring');
const Grandpa = () => {
    const [house,setHouse] = useState(1);
    const ornaments = 'Diamond Ring'
    const handleBuyAHouse = () =>{
        const newHouseCounts = house + 1;
        setHouse(newHouseCounts)
    }
    return (
        <RingContext.Provider value='alur ring'>{/* hard code are to used  */}
        {/* <RingContext.Provider value={house}>dynamically used  */}
            <div className='grandpa'>
                <h1>GrandDada  </h1>
                <h3>House : {house}<button onClick={handleBuyAHouse} style={{marginLeft:'5px'}}>Buy House</button></h3>
                <section style={{display:'flex'}}>
                   <Father house={house} ornaments={ornaments}></Father>
                   <Uncle house={house} className="uncle"></Uncle>
                   <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;