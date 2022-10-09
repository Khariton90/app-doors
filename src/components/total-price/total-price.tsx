import styles from './total-price.module.scss';

export function TotalPrice(): JSX.Element {
  return (
    <div className={styles.totalPrice}>
      <p>Цена за комплект:<b>10 111 ₽</b></p>
      <p>Цена за услуги и монтаж:<b>20 222 ₽</b></p>
      <p>Итого:<b>37 864 ₽</b></p>
    </div>
  )
}