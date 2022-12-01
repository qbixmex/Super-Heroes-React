import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='login' element={ <LoginPage /> } />
      <Route path='/*' element={ <Navigate to='/auth/login' /> } />
    </Routes>
  );
}