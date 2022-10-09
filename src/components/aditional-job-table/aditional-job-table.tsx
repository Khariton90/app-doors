import { TypeDoors } from '../../consts';
import { useAppSelector } from '../../hooks/state';
import ExtentionOpeningTable from '../extention-opening-table/extention-opening-table';
import NarrowingOpeningTable from '../narrowing-opening-table/narrowing-opening-table';

export default function AditionalJobTable(): JSX.Element {
  const selectedTypeDoor = useAppSelector((state) => state.selectedTypeDoor);
  const selectedDoor = useAppSelector((state) => state.selectedDoor);

  if (selectedDoor && selectedTypeDoor === TypeDoors.EXTERRIOR) {
    return (
      <>
        <tr>
          <td className="confluenceTd" colSpan={4}>
            <p><strong>Дополнительные работы</strong></p>
          </td>
        </tr>
        {/* <tr>
          <td className="confluenceTd">Замена (установка) замка металлической входной двери на аналогичный</td>
          <td className="confluenceTd">Демонтаж старого замка, установка нового. Регулировка.</td>
          <td className="confluenceTd">1 шт.</td>
          <td className="confluenceTd">850 <span>₽</span>&nbsp;</td>
        </tr>
        <tr>
          <td className="confluenceTd">Утепление короба входной двери</td>
          <td className="confluenceTd">Дополнительное укрепление дверной коробки, входной двери материалом заказчика.
                Запенивание или закладывание минеральной ваты.
          </td>
          <td className="confluenceTd">1 шт.</td>
          <td className="confluenceTd">1650 <span>₽</span></td>
        </tr> */}

        <ExtentionOpeningTable />
        <NarrowingOpeningTable />
        {/* <tr>
          <td className="confluenceTd">Уборка пылесосом</td>
          <td className="confluenceTd">Уборка крупного строительного мусора: бетонные крошки, песок, мелкие камни, остатки
                пены, кусочки бумаги.
          </td>
          <td className="confluenceTd">1 шт.</td>
          <td className="confluenceTd">600 <span>₽</span></td>
        </tr>
        <tr>
          <td className="confluenceTd">Повторный выезд на установку</td>
          <td className="confluenceTd">Повторный выезд на установку (в случае неготовности объекта к установке при первом
                выезде).
          </td>
          <td className="confluenceTd">выезд</td>
          <td className="confluenceTd">1000 <span>₽</span></td>
        </tr>
        <tr>
          <td className="confluenceTd">Выезд за город в пределах 70 км (расчет в одну сторону)</td>
          <td className="confluenceTd">Выезд мастера. Расчет согласно карте.</td>
          <td className="confluenceTd">руб./км</td>
          <td className="confluenceTd">35 <span>₽</span></td>
        </tr>
        <tr>
          <td className="confluenceTd">Выезд для выполнения дополнительных работ</td>
          <td className="confluenceTd">Выезд мастера исключительно в случае заказа клиентом только дополнительных услуг
                без основных.
          </td>
          <td className="confluenceTd">выезд</td>
          <td className="confluenceTd">1000 <span>₽</span></td>
        </tr> */}
      </>
    );
  }

  return (
    <>
      <tr>
        <td className="confluenceTd" colSpan={4}>
          <p><strong>Дополнительные работы</strong></p>
        </td>
      </tr>
      <tr>
        <td className="confluenceTd">Демонтаж межкомнатной двери</td>
        <td className="confluenceTd">Демонтаж межкомнатной двери с сохранением дверного полотна.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">400 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Демонтаж портала/арки</td>
        <td className="confluenceTd">Демонтаж портала/арки без сохранения материалов.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">500 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Распил наличника/добора</td>
        <td className="confluenceTd">Распил наличника/добора вдоль (уменьшение ширины).</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">150 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Распил наличника на входной деревянной/межкомнатной двери</td>
        <td className="confluenceTd">Распил наличника/добора вдоль (уменьшение ширины).</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">150 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Распил наличника на входной металлической двери</td>
        <td className="confluenceTd">Распил металлического наличника на входной двери.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">550 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Скрытый крепеж короба (по пожеланию клиента)</td>
        <td className="confluenceTd">Монтаж коробки без видимых мест крепежа.</td>
        <td className="confluenceTd">1 ши.</td>
        <td className="confluenceTd">500 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Подпил плинтуса</td>
        <td className="confluenceTd">Подпил плинтуса, установка заглушки, закрепление плинтуса.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">80 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Врезка петли</td>
        <td className="confluenceTd">Врезка дополнительной петли.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">150 <span>₽</span></td>
      </tr>

      <tr>
        <td className="confluenceTd">Замена дверного полотна на аналогичное</td>
        <td className="confluenceTd">Демонтаж&nbsp; старого полотна, демонтаж ручки, Установка нового полотна по уровню
                с выдерживанием необходимых зазоров, (петли бабочки), врезка ручки-защелки.
        </td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">1500 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Установка добора</td>
        <td className="confluenceTd">Установка комплекта доборов на 1 дверь.</td>
        <td className="confluenceTd">комплект</td>
        <td className="confluenceTd">800 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Врезка замка</td>
        <td className="confluenceTd">Врезка замка.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">500 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Установка дверного доводчика</td>
        <td className="confluenceTd">Установка дверного доводчика, регулировка.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">1200 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Установка напольного ограничителя на керамогранит</td>
        <td className="confluenceTd">Установка напольного ограничителя, крепление к основанию пола.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">600 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Установка напольного ограничителя на ламинат</td>
        <td className="confluenceTd">Установка напольного ограничителя, крепление к основанию пола.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">300 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Врезка магнитного замка</td>
        <td className="confluenceTd">Врезка магнитного замка.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">600 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Врезка ручек «купе» в полотно (за пару)</td>
        <td className="confluenceTd">Врезка утапливаемых ручек «купе» в полотно (за пару).</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">800 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Подпил дверного полотна</td>
        <td className="confluenceTd">Подпил дверного полотна (услуга ограничена конструкцией двери).</td>
        <td className="confluenceTd">1 пил</td>
        <td className="confluenceTd">600 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Расширение бетонного проема</td>
        <td className="confluenceTd">Расширение бетонного проема.</td>
        <td className="confluenceTd">1 м.п.</td>
        <td className="confluenceTd">900 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Расширение кирпичного проема</td>
        <td className="confluenceTd">Расширение кирпичного проема (и др. материалов), при наличии технической
                возможности, до 6 см.
        </td>
        <td className="confluenceTd">1 м.п.</td>
        <td className="confluenceTd">600 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Уменьшение проема</td>
        <td className="confluenceTd">Уменьшение ширины или высоты проема с применением материалов заказчика (брус).</td>
        <td className="confluenceTd">1 м.п.</td>
        <td className="confluenceTd">400 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Установка порога</td>
        <td className="confluenceTd">Установка порога.</td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">300 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Декорирование механизма для раздвижной двери</td>
        <td className="confluenceTd">Оформление/декорирование раздвижной системы доборной планкой. Монтаж доборной
                планки, 4 реза под 45 градусов, стыковка с боковинами.
        </td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">1200 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Уборка пылесосом</td>
        <td className="confluenceTd">Уборка крупного строительного мусора: бетонные крошки, песок, мелкие камни, остатки
                пены, кусочки бумаги.
        </td>
        <td className="confluenceTd">1 шт.</td>
        <td className="confluenceTd">600 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Повторный выезд на установку</td>
        <td className="confluenceTd">Повторный выезд на установку (в случае неготовности объекта к установке при первом
                выезде).
        </td>
        <td className="confluenceTd">выезд</td>
        <td className="confluenceTd">1000 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Выезд за город в пределах 70 км (расчет в одну сторону)</td>
        <td className="confluenceTd">Выезд мастера. Расчет согласно карте.</td>
        <td className="confluenceTd">руб./км</td>
        <td className="confluenceTd">35 <span>₽</span></td>
      </tr>
      <tr>
        <td className="confluenceTd">Выезд для выполнения дополнительных работ</td>
        <td className="confluenceTd">Выезд мастера исключительно в случае заказа клиентом только дополнительных услуг
                без основных.
        </td>
        <td className="confluenceTd">выезд</td>
        <td className="confluenceTd">1000 <span>₽</span></td>
      </tr>
    </>
  );
}
