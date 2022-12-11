import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../../layout/navigation';
import { UsersPage } from '../pages';

export function UsersRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
}
