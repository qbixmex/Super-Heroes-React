import { Routes, Route } from 'react-router-dom';
import { UsersPage } from '../pages';
import { NotFoundPage } from '../pages/not.found.page';

export function UsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
