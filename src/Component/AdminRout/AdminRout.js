import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const AdminRout = ({ children, ...rest }) => {

    const {admin, user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
        {...rest}
        render={({ location }) =>

            user.email && admin ?(
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
    />
    );
};

export default AdminRout;