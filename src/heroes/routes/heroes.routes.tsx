import { Routes, Route, Navigate } from 'react-router-dom';
import { HeroesPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HeroesPage /> } />
      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
};