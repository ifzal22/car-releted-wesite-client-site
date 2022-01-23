import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const PriveatRout = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
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

export default PriveatRout;