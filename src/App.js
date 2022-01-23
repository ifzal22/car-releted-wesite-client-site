import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Component/About/About';
import MyBooking from './Component/AllBooking/MyBooking';
import Booking from './Component/Booking/Booking';
import AuthProvider from './Component/Context/AuthProvider';
import DashboardDrawer from './Component/DashboardDrower/DashboardDrower';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import HotCar2 from './Component/Home/HotCar/HotCar2/HotCar2';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register/Register';
import OurService from './Component/OurService/OurService';
import PriveatRout from './Component/PriveatRout/PriveatRout';
function App() {
  return (
    <div className="">
  <AuthProvider>
  <BrowserRouter>
<Header></Header>

<Switch>
  <Route exact path="/">
    <Home></Home>
  </Route>
  <Route  path="/home">
    <Home></Home>
  </Route>

<Route  path="/AllCars">
  <HotCar2></HotCar2>
</Route>

<PriveatRout   path="/Booking/:id">
  <Booking></Booking>
</PriveatRout>


<PriveatRout path="/dashboardDrawer">
  <DashboardDrawer></DashboardDrawer>
</PriveatRout>
<PriveatRout path="/MyBooking">
  <MyBooking></MyBooking>
</PriveatRout>



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
  </AuthProvider>
    </div>
  );
}

export default App;
