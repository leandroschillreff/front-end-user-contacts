import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return <div>Carregando Página...</div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};
