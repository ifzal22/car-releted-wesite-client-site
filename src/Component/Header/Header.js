import React, { useState } from 'react';
import { Link, Link as NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../Hooks/UseAuth';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    console.log(user)
  
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    return (
    <div>

    <div>
        <header className='header'>
            <div onClick={handleToggle} id="menu-btn" className="fas fa-bars"></div>


            <NavLink to="/home" className='logo ItemLink'><span>IHT</span>Car'S</NavLink>
          

          
{
navbarOpen === true ?

<nav className='nav2 shadow'>

<ul>
<li> <NavLink to="/home" className='ItemLink'>Home</NavLink></li>
<li>  <NavLink   to="/allCars" className='ItemLink'>expres</NavLink></li>
<li>    <NavLink to="/service" className='ItemLink'>Service</NavLink></li>

{user.email &&
    <li>    <NavLink to="/dashboardDrawer" className='ItemLink'>DashBoard</NavLink></li>
}



<li>
<NavLink to="/about" className='ItemLink'>About</NavLink></li>
<li>    {
    user.email ?   <NavLink to="/login" className='ItemLink'>logOut</NavLink> : 
    
    
    <NavLink to="/login" className='ItemLink'>login</NavLink>}
    
    </li>




</ul>
</nav>
:
''

} 


                    <nav className='navbar'>

                        <NavLink to="/home" className='ItemLink'>Home</NavLink>
                        <NavLink to="/allCars" className='ItemLink'>expres</NavLink>
                        <NavLink to="/service" className='ItemLink'>Service</NavLink>
                    { user.email &&   <NavLink to="/dashboardDrawer" className='ItemLink'>DashBoard</NavLink>}
                        <NavLink to="/about" className='ItemLink'>About</NavLink>
                        <NavLink to="/login" className='ItemLink'>login</NavLink>
                        <NavLink to="/login" className='ItemLink'> {user.displayName} </NavLink>
                    </nav>



                    {
                        user?.email ?

                            <Link to="/login">
                                <div id='login-btn'>
                                    <button onClick={logout} className='btn'>LogOut</button>
                                    <i className="far fa-user"></i>

                                </div>
                            </Link>
                            :
                            <Link to="/login">
                                <div id='login-btn'>
                                    <button className='btn'>Login</button>
                                    <i className="far fa-user"></i>

                                </div>
                            </Link>
                    }

                </header>

                {/* LOGIN */}


            </div>

        </div>
    );
};

export default Header;