import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../../layout/navigation';
import { HeroesPage } from '../pages';
import { NotFoundPage } from '../pages/not.found.page';

export function HeroesRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
