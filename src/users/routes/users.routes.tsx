import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../../layout/navigation';
import { UsersPage } from '../pages';
import { NotFoundPage } from '../pages/not.found.page';

export function UsersRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
