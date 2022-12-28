import {useState , useEffect} from "react";

const useTShirts = () => {
      const [tShirts,setTShirts] = useState([]);
      // console.log(tShirts);
      useEffect( () =>{
        fetch('tShirts.json')
        .then(res => res.json())
        .then(data => setTShirts(data))
      },[])
      return [tShirts,setTShirts] ; 
}
export default useTShirts ; 