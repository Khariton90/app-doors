import { Demolition } from '../../consts';
import { useAppSelector } from '../../hooks/state';

export default function DemolitionExterriorTable(): JSX.Element {
  const demolition = useAppSelector((state) => state.offer.typeWork.demolition);

  if (demolition) {
    return (
      <>
        {
          demolition.title === Demolition.Easy ?
            <tr>
              <td className="confluenceTd">Демонтаж входной двери</td>
              <td className="confluenceTd">Демонтаж металлической входной двери с сохранением дверного полотна. Простой
                  демонтаж относительно современных дверей в старом жилом фонде или новостройках. Крепление на анкера и
                  монтажную пену.
              </td>
              <td className="confluenceTd">1 шт.</td>
              <td className="confluenceTd">700 <span>₽</span></td>
            </tr> :
            null
        }

        {
          demolition.title === Demolition.Middle ?
            <tr>
              <td className="confluenceTd">Демонтаж входной двери (старый жилой фонд, сложный демонтаж)</td>
              <td className="confluenceTd">Демонтаж металлической входной двери с сохранением дверного полотна. Старый жилой
                  фонд, сложный демонтаж.
              </td>
              <td className="confluenceTd">1 шт.</td>
              <td className="confluenceTd">1500 <span>₽</span></td>
            </tr> :
            null
        }

        {
          demolition.title === Demolition.Heavy ?
            <tr>
              <td className="confluenceTd">Демонтаж входной двери с заливной рамой</td>
              <td className="confluenceTd">Демонтаж металлической заливной рамы.</td>
              <td className="confluenceTd">1 шт.</td>
              <td className="confluenceTd">2500 <span>₽</span></td>
            </tr> :
            null
        }
      </>
    );
  }

  return (
    <>
    </>
  );

}
