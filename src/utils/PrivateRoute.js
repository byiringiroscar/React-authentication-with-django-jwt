import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    let {user} = useContext(AuthContext);
    console.log(user)
    return user ? children : <Navigate to='/login' replace />;
};

export default PrivateRoute;
