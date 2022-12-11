import { Route, Routes, Navigate } from 'react-router-dom';
import { HeroesPage } from '../heroes/pages';
import { UsersPage } from '../users/pages';
import { Navigation } from '../layout/navigation';

export function ProtectedRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroesPage />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
