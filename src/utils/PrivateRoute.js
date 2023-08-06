import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authenticated = false;

  if (!authenticated) {
    return <Navigate to="/login"  />
}
  return children;
};

export default PrivateRoute;
