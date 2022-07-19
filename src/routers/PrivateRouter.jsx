import React from 'react'
import {Outlet} from 'react-router';
import Login from '../pages/Login';
import {useAuth} from '../hooks/useAuth';

export const PrivateRoutes = () => {
    const auth = useAuth();
    return auth.token  ? <Outlet/> : <Login/>;
}
