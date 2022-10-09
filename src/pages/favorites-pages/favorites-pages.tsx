import './favorites-pages.scss';
import Header from '../../components/header/header';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import EntryForm from '../../components/entry-form/entry-form';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { useEffect } from 'react';
import { deleteOffer, getInitialOffer } from '../../store/actions';
import { Offer } from '../../types/offer.type';
export default function FavoritesPages(): JSX.Element {
  const offers = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const onDeleteOffer = (offer: Offer) => {
    dispatch(deleteOffer(offer));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getInitialOffer());
  }, [dispatch]);

  const priceAndRepairTotal = offers.reduce((acc, item) => item.totalPrice + acc, 0);

  if (offers.length) {
    return (
      <div className="page favorites-page">
        <Header />
        <div className="container">
          <h1>Все предложения</h1>
          <div className='favorites__cards favorites-cards'>
            {offers.map((offer) => <FavoriteCard key={offer.product.code + offer.id} offer={offer} onDeleteOffer={onDeleteOffer}/>)}
          </div>
          <h2>Итого: {new Intl.NumberFormat('ru-RU').format(priceAndRepairTotal)} ₽</h2>
        </div>
        <EntryForm />
      </div>
    );
  }

  return (
    <div>
      Пока пусто
    </div>
  );
}
