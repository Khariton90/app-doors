import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { dropToken } from '../../services/token';
import { redirectToRoute, requireAutorization } from '../../store/actions';
import './header.scss';

export default function Header(): JSX.Element {
  const offersLength = useAppSelector((state) => state.favorites.length);
  const dispatch = useAppDispatch();

  const handleLogout: MouseEventHandler = (evt) => {
    evt.preventDefault();
    dropToken();
    dispatch(redirectToRoute(AppRoute.Login));
    dispatch(requireAutorization(AuthStatus.NoAuth));
  };

  return (
    <header className="header">
      <div className='container header__container'>
        <div>
          <Link to={AppRoute.Main} className="login__logo">
            <span>Двери</span>
            <br />
            <span>Монтаж</span>
          </Link>
        </div>
        <div className='header__right'>
          <Link to={AppRoute.Favorites} >
            petrovich@petrovich.ru
            <span className='header__sign-out login-avatar'>{ offersLength }</span>
          </Link>
          <span onClick={handleLogout}> Выйти</span>
        </div>
      </div>
    </header>
  );
}
