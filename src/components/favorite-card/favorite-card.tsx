import { Offer } from '../../types/offer.type';

type FavoriteCardProps = {
  offer: Offer,
  onDeleteOffer(offer: Offer): void
}

export default function FavoriteCard({offer, onDeleteOffer}: FavoriteCardProps): JSX.Element {

  return (
    <div className='favorites-cards__card card'>
      <div className='card__content'>
        <figure>
          <img src={offer.product.coverImage} alt="" />
        </figure>
        <figcaption>
          <div className='card__delete-btn card-btn' onClick={() => onDeleteOffer(offer)}></div>
          <div className='card__delete-btn card-btn'></div>
        </figcaption>
      </div>
      <div className='card__price'>
        <p>Дверь входная + Монтаж</p>
        <p>{new Intl.NumberFormat('ru-RU').format(offer.totalPrice)} ₽</p>
      </div>
    </div>
  );
}
