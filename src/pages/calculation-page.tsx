import { CalcDoorTable } from '../components/calc-door-table/calc-door-table';
import './calculation-page.scss';

export function CalculationPage(): JSX.Element {
  return (
    <div className="calc-page total">
      <div className="total__list">
        <div className='total__door calc-door'>
          <h3 className='calc-door__title'>Дверное полотно Verda Бавария 16 дуб шале капучино глухое пвх 700х2000 мм</h3>
          <CalcDoorTable />
        </div>
        <div className='total__parameters'>
          <h3>Работы</h3>
          <CalcDoorTable />
        </div>
      </div>
    </div>
  );
}
