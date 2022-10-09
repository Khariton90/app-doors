import { WeightDoors } from '../../consts';

type WeightExterriorTableProps = {
  weight: number
}

export function WeightExterriorTable({ weight }: WeightExterriorTableProps): JSX.Element {
  if (weight <= WeightDoors.LOW) {
    return (
      <tr>
        <td className="confluenceTd">Установка входной двери (до 95 кг)</td>
        <td className="confluenceTd">Установка входной двери, запенивание (до 3-х см) по периметру, без заполнения
                полостей дверной рамы. Демонтаж старой деревянной двери (без сохранения полотна). Анкера в стоимость не
                входят.
        </td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">3400 <span>₽</span></td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="confluenceTd">Установка входной двери (от 95 кг)</td>
      <td className="confluenceTd">Установка входной двери, запенивание (до 3-х см) по периметру, без заполнения
                  полостей дверной рамы. Демонтаж старой деревянной двери (без сохранения полотна). Анкера в стоимость не
                  входят.&nbsp;
      </td>
      <td className="confluenceTd">1 шт.</td>
      <td className="confluenceTd">4400 <span>₽</span></td>
    </tr>
  );
}
