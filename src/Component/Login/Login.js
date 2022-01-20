import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css';
const Login = () => {
    return (
        <div className='mt-5 ' style={{marginTop:'100px'}}>
    

            
               <div className='login-form-container'>
           <span id="close-login-form" className="fas fa-times"></span>
<form>
 
<h3>user login</h3>
        <input type="email" placeholder="email" className="box"/>
        <input type="password" placeholder="password" className="box"/>
        <p> forget your password <Link href="#">click here</Link> </p>
        <input type="submit" value="login" className="btn"/>
        <p>or login with</p>
        <div className="buttons">
            <button href="#" className="btn"> google </button>
            <button href="#" className="btn"> facebook </button>
        </div>
        <p> don't have an account <Link to="register" href="#">create one</Link> </p>
</form>
           </div>
        </div>
    );
};

export default Login;