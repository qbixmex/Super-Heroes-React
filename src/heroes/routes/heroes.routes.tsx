import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../../layout/navigation';
import { HeroesPage } from '../pages';

export function HeroesRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
