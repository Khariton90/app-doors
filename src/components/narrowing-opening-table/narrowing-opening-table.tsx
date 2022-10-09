import { useAppSelector } from '../../hooks/state';

export default function NarrowingOpeningTable(): JSX.Element {
  const narrowing = useAppSelector((state) => state.offer.wallExtention);

  if (narrowing.qty) {
    return (
      <tr>
        <td className="confluenceTd">Уменьшение проема</td>
        <td className="confluenceTd">Уменьшение ширины или высоты проема с применением материалов заказчика (брус).</td>
        <td className="confluenceTd">{ narrowing.qty } м.п.</td>
        <td className="confluenceTd">{narrowing.price * narrowing.qty}<span>₽</span></td>
      </tr>
    );
  }

  return (
    <>
    </>
  );
}
