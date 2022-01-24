import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import '../../Login/Login.css';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://whispering-refuge-31044.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    // setEmail('');
                }
            })

        e.preventDefault()
    }
    return (
        <div className='CENTER col-md-12' style={{ marginTop: '8px' }}>



            <div className='login-form-container'>
                <span id="close-login-form" className="fas fa-times"></span>
                <form onSubmit={handleAdminSubmit}>

                    <h3>Make Admin</h3>
                    <input onBlur={handleOnBlur} name="email" type="email" placeholder="email" className="box" />

                    <button className="btn">Make Admin</button>


                    {success ? <Alert severity="success">Made Admin successfully!</Alert>  
                    : <Alert severity="error">This is an error alert — check it out!</Alert>}


                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;