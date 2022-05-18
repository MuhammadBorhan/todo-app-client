import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from "react-router-dom";
import auth from '../../firebase.init';

const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;