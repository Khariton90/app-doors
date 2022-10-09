import { useAppSelector } from '../../hooks/state';
import DemolitionExterriorTable from '../demolition-exterrior-table/demolition-exterrior-table';
import { WeightExterriorTable } from '../weight-exterrior-table/weight-exterriot-table';

export default function ExterriorDoorsTable(): JSX.Element {
  const selectedDoor = useAppSelector((state) => state.selectedDoor);
  const offer = useAppSelector((state) => state.offer);

  if (selectedDoor) {
    return (
      <>
        <tr>
          <td className="confluenceTd" colSpan={4}>
            <p><strong>Входные двери</strong></p>
          </td>
        </tr>
        <WeightExterriorTable weight={selectedDoor.weight}/>
        <DemolitionExterriorTable />
        {
          offer.typeWork.openDesign ?
            <tr>
              <td className="confluenceTd">Оформление проёма входной двери доборами и наличниками с внутренней стороны</td>
              <td className="confluenceTd">Оформление проёма входной двери добором и наличниками с внутренней стороны, доборы
                  в один ряд. Услуга не оказывается при установке между двух дверей. Материал приобретается отдельно. Все
                  распилы включены в стоимость.
              </td>
              <td className="confluenceTd">1 шт.</td>
              <td className="confluenceTd">2300 <span>₽</span></td>
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
