import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

const Header = () => {



    
    let menu = document.querySelector('#menu-btn');
    console.log(menu)
let navbar = document.querySelector('.navbar');

console.log(navbar)
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }


  document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
  }


  document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
  }


/*   window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
    }else{
      document.querySelector('.header').classList.remove('active');
    };
  
  }; */

    return (
        <div>
            
        <div>
            <header className='header'>
            <div id="menu-btn" class="fas fa-bars"></div>
<Link  to="/home" className='logo ItemLink'><span>IHT</span>Car'S</Link>


<nav className='navbar'>
    
    <Link to="/home" className='ItemLink'>Home</Link>
    <Link className='ItemLink'>expres</Link>
    <Link className='ItemLink'>Service</Link>
    <Link className='ItemLink'>About</Link>
    <Link className='ItemLink'>login</Link>
</nav>

<div id='login-btn'>
    <button className='btn'>Login</button>
    <i class="far fa-user"></i>

</div>

            </header>

           {/* LOGIN */}

           <div className='login-form-container'>
           <span id="close-login-form" class="fas fa-times"></span>
<form>
 
<h3>user login</h3>
        <input type="email" placeholder="email" class="box"/>
        <input type="password" placeholder="password" class="box"/>
        <p> forget your password <Link href="#">click here</Link> </p>
        <input type="submit" value="login" class="btn"/>
        <p>or login with</p>
        <div class="buttons">
            <Link href="#" className="btn"> google </Link>
            <Link href="#" className="btn"> facebook </Link>
        </div>
        <p> don't have an account <Link href="#">create one</Link> </p>
</form>
           </div>
        </div>
    
        </div>
    );
};

export default Header;