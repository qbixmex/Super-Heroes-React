import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heroes/routes';
import { UsersRoutes } from '../users/routes/users.routes';

export function AppRouter() {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return (
      <div className="text-center mt-4">
        <Spinner variant="primary" />
      </div>
    );
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )
          : (
            <>
              <Route path="/*" element={<HeroesRoutes />} />
              <Route path="/heroes/*" element={<HeroesRoutes />} />
              <Route path="/users/*" element={<UsersRoutes />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  );
}
