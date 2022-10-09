import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks/state';
import { getToken, setToken } from '../../services/token';
import { loginUser, redirectToRoute } from '../../store/actions';
import { User } from '../../types/user.type';
import './login-page.scss';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const token = getToken();

  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    id: 0,
    token: ''
  });

  const [value, setValue] = useState<{[key: string]: string | number}>(user);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const login = 'petrovich@petrovich.ru';
    const pass = 'petrovich';

    if (value.email === login && value.password === pass) {
      setToken('123');

      const data = {
        email: value.email,
        password: value.password,
        id: 1,
        token: getToken()
      };

      setUser((prevUser) => (prevUser = data));
      dispatch(loginUser(data));
      dispatch(redirectToRoute(AppRoute.Main));
    }
  };

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({...prevValue, [evt.target.name]: evt.target.value}));
  };

  useEffect(() => {
    if (token) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  });

  return (
    <div className="page">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <div className="login__left">
              <div>
                <a href="/" className="login__logo">
                  <span>Двери</span>
                  <br />
                  <span>Монтаж</span>
                </a>
              </div>
              <form onSubmit={handleFormSubmit} className="login__form">
                <h1 className="login__title">Вход</h1>
                <p className="login__subtitle">Войдите в систему, используя свои данные, которые вы ввели
                                при регистрации.
                </p>
                <label htmlFor="">
                  <span>Email</span>
                  <br />
                  <input type="email" name="email" placeholder="email@gmail.com"
                    value={value.email}
                    required
                    autoComplete='off'
                    onChange={handleChangeInput}
                  />
                </label>
                <br />
                <label htmlFor="">
                  <span>Password</span>
                  <br />
                  <input type="password" name="password" placeholder="минимум 8 символов" value={value.password}
                    required
                    min={8}
                    autoComplete='off'
                    onChange={handleChangeInput}
                  />
                </label>
                <br />
                {/* <label htmlFor="">
                  <input type="checkbox" className="keep-me"/>
                  <span>Запомнить на этом компьютере</span>
                </label> */}

                <input type="submit" className="btn login__form-btn" value="Login" />

                <a href="/" className="forgot-password">Забыли пароль</a>
              </form>

              <a href="/" className="login__form-sign-up">У вас нет учетной записи?
                <span>Зарегистрируйтесь</span>
              </a>
            </div>

            <div className="login__right">
              <div className="login__right-image">
                <img src="./images/door-login3.png" alt="" />
              </div>
              <h2 className="login__description">Расчет установки дверей</h2>
              <p className="login__subtitle login__right-subtitle">
                            Подберите двери и с легкостью произведите
                <br /> расчет монтажа по вашим размерам
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
