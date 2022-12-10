import { Route, Routes, Navigate } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes';
import { AuthRoutes } from '../auth/routes';
import { UsersRoutes } from '../users/routes';

export function AppRouter() {
  // const status = 'authenticated';

  return (
    <Routes>
      <Route path="/*" element={<HeroesRoutes />} />
      <Route path="/heroes/*" element={<HeroesRoutes />} />
      <Route path="/users/*" element={<UsersRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
