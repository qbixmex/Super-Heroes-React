import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <LoginPage /> } />
      <Route path="/*" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}
