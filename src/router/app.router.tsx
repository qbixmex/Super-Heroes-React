import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { PublicRoutes } from './public.routes';
import { ProtectedRoutes } from './protected.routes';
import { useAuthStore } from '../hooks/useAuthStore';

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
          ? <Route path="*" element={<PublicRoutes />} />
          : <Route path="*" element={<ProtectedRoutes />} />
      }
    </Routes>
  );
}
