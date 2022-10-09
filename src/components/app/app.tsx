import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../consts';
import { useAppDispatch } from '../../hooks/state';
import { CalculationPage } from '../../pages/calculation-page';
import FavoritesPages from '../../pages/favorites-pages/favorites-pages';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page';
import { getToken } from '../../services/token';
import { redirectToRoute, requireAutorization } from '../../store/actions';
import './app.scss';

function App(): JSX.Element {
  const token = getToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
    dispatch(requireAutorization(AuthStatus.Auth));
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Main} element={<MainPage />}/>
      <Route path={AppRoute.Total} element={<CalculationPage />}/>
      <Route path={AppRoute.Favorites} element={<FavoritesPages />} />
    </Routes>
  );
}

export default App;
