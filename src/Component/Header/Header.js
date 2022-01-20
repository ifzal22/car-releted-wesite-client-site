import React, { useState } from 'react';
import { Link, Link as NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

const Header = () => {
  const [tru, setTru]= useState(false)
console.log(tru)
const BTN = ()=>{
setTru(true)
}



    return (
        <div>
            
        <div>
            <header className='header'>
            <div onClick={BTN} id="menu-btn" class="fas fa-bars"></div>

           
<NavLink  to="/home" className='logo ItemLink'><span>IHT</span>Car'S</NavLink>

{/* 
{
tru ==true? 

<nav className=''>
    
 <ul>
   <li> <NavLink to="/home" className='ItemLink'>Home</NavLink></li>
   <li>  <NavLink className='ItemLink'>expres</NavLink></li>
   <li>    <NavLink className='ItemLink'>Service</NavLink></li>
   <li>
    <NavLink className='ItemLink'>About</NavLink></li>
   <li>    <NavLink className='ItemLink'>login</NavLink></li>

  


 </ul>
</nav>
:
''

} */}


<nav className='navbar'>
    
    <NavLink to="/home" className='ItemLink'>Home</NavLink>
    <NavLink to="/allCars" className='ItemLink'>expres</NavLink>
    <NavLink to="/service" className='ItemLink'>Service</NavLink>
    <NavLink to="/about" className='ItemLink'>About</NavLink>
    <NavLink to="/login"  className='ItemLink'>login</NavLink>
</nav>

<Link to="/login">
<div id='login-btn'>
    <button className='btn'>Login</button>
    <i class="far fa-user"></i>

</div>
</Link>

            </header>

           {/* LOGIN */}

        
        </div>
    
        </div>
    );
};

export default Header;