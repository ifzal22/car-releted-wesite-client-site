import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import HotCar from './Component/Home/HotCar/HotCar';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register/Register';
import OurService from './Component/OurService/OurService';
function App() {
  return (
    <div className="">
    <BrowserRouter>
<Header></Header>

<Switch>
  <Route exact path="/">
    <Home></Home>
  </Route>
  <Route  path="/home">
    <Home></Home>
  </Route>

<Route  path="/allCars">
  <HotCar></HotCar>
</Route>

<Route path="/service">
<OurService></OurService>
</Route>

<Route path="/about">
<About></About>
</Route>

<Route path="/Login">
<Login></Login>
</Route>
<Route path="/register">
<Register></Register>
</Route>



</Switch>




    </BrowserRouter>
    </div>
  );
}

export default App;
