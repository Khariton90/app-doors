import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { addFavoriteOffer, getOfferTotalPrice, redirectToRoute } from '../../store/actions';
import './offer-result.scss';

export function OfferResult(): JSX.Element {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const totalInstallPrice = useAppSelector((state) => state.offer.totalInstallPrice);
  const favoritesLength = useAppSelector((state) => state.favorites.length);

  const handleClickAddFavoriteOffer = () => {
    dispatch(getOfferTotalPrice());
    dispatch(addFavoriteOffer(offer));
  };

  const handleSubmit = () => {
    if (favoritesLength) {
      dispatch(redirectToRoute(AppRoute.Favorites));
    }
  };

  return (
    <>
      <div className="offer-result">
        <p>Цена за комплект: <span>{new Intl.NumberFormat('ru-RU').format(offer.product.price.retail)}  ₽</span></p>
        <p>Цена за услуги и монтаж: <span>{new Intl.NumberFormat('ru-RU').format(totalInstallPrice)} ₽</span></p>
        <p>Итого: <span>{new Intl.NumberFormat('ru-RU').format(offer.product.price.retail + totalInstallPrice)}  ₽</span></p>
      </div>
      <div className='offer-result-buttons'>
        <div className='offer-btn add-btn' title='Добавить дверь' onClick={handleClickAddFavoriteOffer}>Добавить</div>
        <div className='offer-btn arrange-btn' title='Перейти к оформлению' onClick={handleSubmit}>Оформить</div>
      </div>
    </>
  );
}
