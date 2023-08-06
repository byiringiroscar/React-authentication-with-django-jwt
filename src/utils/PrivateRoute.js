import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authUser = false;

  if (!authUser) {
    return <Navigate to="/login"  />
}
  return children;
};

export default PrivateRoute;
