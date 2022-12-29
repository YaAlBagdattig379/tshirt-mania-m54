import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import {Routes,Route} from 'react-router-dom';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/OrderReview'element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa'element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
