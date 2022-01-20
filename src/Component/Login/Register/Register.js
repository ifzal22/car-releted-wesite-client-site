import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Register.css';
const Register = () => {
    return (
        <div>
                  
                  <div className='login-form-container'>
           <span id="close-login-form" className="fas fa-times"></span>
<form>
 
<h3>user login</h3>


        <input type="name" placeholder="name" className="box"/>
        <input type="email" placeholder="email" className="box"/>
        <input type="password" placeholder="password" className="box"/>


        <input type="password" placeholder="reInter-password" className="box"/>
        <p> forget your password <Link href="#">click here</Link> </p>
        <input type="submit" value="login" className="btn"/>

   
        <p> alrady have an account <Link to="login" href="#">Login now</Link> </p>
</form>
           </div>
        </div>
    );
};

export default Register;