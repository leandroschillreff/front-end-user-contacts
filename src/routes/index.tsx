import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { DashBoard } from '../pages/DashBoard';
import { Register } from '../pages/Register';
import { ProtectedRoutes } from '../components/ProtectedRoutes';

export const RoutesMain = () => (
  <Routes>
    <Route path='*' element={<Navigate replace to='/login' />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path='/dashboard' element={<DashBoard />} />
    </Route>
  </Routes>
);
