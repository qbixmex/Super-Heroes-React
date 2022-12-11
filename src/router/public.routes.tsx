import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages';

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={ <Navigate to="/login" />} />
    </Routes>
  );
}
