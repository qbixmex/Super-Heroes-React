import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

function HeroesApp() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default HeroesApp;
