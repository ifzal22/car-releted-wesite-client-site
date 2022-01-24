import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../Hooks/UseAuth';
import './Login.css';
const Login = () => {
    const [loginData, setLoginData] = useState({});



    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field)
        const newLoginData = { ...loginData };

        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className='mt-5 ' style={{ marginTop: '100px' }}>



            <div className='login-form-container'>
                <Link to="/home">
                <span  id="close-login-form" className="fas fa-times"></span>
                </Link>
            
                <form onSubmit={handleLoginSubmit}>

                    <h3>user login</h3>
                    <input onChange={handleOnChange} name="email" type="email" placeholder="email" className="box" />
                    <input onChange={handleOnChange} name="password" type="password" placeholder="password" className="box" />
                    <p> forget your password <Link href="#">click here</Link> </p>
                    <input type="submit" value="login" className="btn" />
                    <p>or login with</p>
                    <div className="buttons">
                        <button 
                         onClick={handleGoogleSignIn}
                        
                        href="#" className="btn"> google </button>
                        <button href="#" className="btn"> facebook </button>
                    </div>
                    <p> don't have an account <Link to="register" href="#">create one</Link> </p>

                    {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}


                </form>
            </div>
        </div>
    );
};

export default Login;