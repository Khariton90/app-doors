import './entry-form.scss';
import Confetti from 'react-confetti';
import { useState } from 'react';

export default function EntryForm(): JSX.Element {
  const [confetti, setConfetti] = useState(false);

  return (
    <form className="entry-form">
      <h2>Создать заявку: Двери</h2>
      {
        confetti ?
          <div className='confetty-wrap'>
            <Confetti width={1920} recycle={false}/>
          </div> :
          null
      }

      <div className='container'>
        <div className="entry-form__title">
        </div>
        <fieldset>
          <label htmlFor="">
        Выбрать магазин
            <select name="" id="">
              <option value="">Парнас</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="">
          Клиент (ФИО):
            <input type="text" />
          </label>
          <label htmlFor="">
          Телефон:
            <input type="text" />
          </label>
          <label htmlFor="">
        Телефон 2:
            <input type="text" />
          </label>
          <label htmlFor="">
          Продавец:
            <input type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="">
          Район:
            <input type="text" />
          </label>
          <label htmlFor="">
          Город:
            <input type="text" />
          </label>
          <label htmlFor="">
        Улица:
            <input type="text" />
          </label>
          <label htmlFor="">
          Дом:
            <input type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="">
          Корпус:
            <input type="text" />
          </label>
          <label htmlFor="">
          Квартира:
            <input type="text" />
          </label>
          <label htmlFor="">
        Доп адрес:
            <input type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="">
          Примечания:
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </label>
          <label htmlFor="">
          Дата заказа:
            <input type="date" name="" id="" />
          </label>
        </fieldset>
        <div className='offer-result-buttons'>
          <div className='offer-btn arrange-btn' title='Перейти к оформлению' onClick={() => setConfetti(true)}>Оформить</div>
        </div>
      </div>

    </form>
  );
}
