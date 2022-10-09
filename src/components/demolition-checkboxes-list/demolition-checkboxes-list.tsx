import cn from 'classnames';
import { Demolition, prices, TypeDoors } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { addWorkToOffer, getTotalInstallPrice } from '../../store/actions';
import { Work } from '../../types/offer.type';

const demolitionTypeList = [
  { id: 1, name: 'type-demolition', label: 'простой', data: Demolition.Easy, price: prices[Demolition.Easy] },
  { id: 2, name: 'type-demolition', label: 'средний', data: Demolition.Middle, price: prices[Demolition.Middle] },
  { id: 3, name: 'type-demolition', label: 'сложный', data: Demolition.Heavy, price: prices[Demolition.Heavy] },
];

type DemolitionCheckboxesListProps = {
  typeDoor: string,
  demolition: Work | null
}

export default function DemolitionCheckboxesList({typeDoor, demolition}: DemolitionCheckboxesListProps): JSX.Element {
  const offer = useAppSelector((state) => state.offer);
  const dispatch = useAppDispatch();

  const handleChangeDemolition = (type: string, price: number) => {
    if (demolition?.title === type) {
      dispatch(addWorkToOffer({...offer, typeWork: {...offer.typeWork, demolition: null}}));
      dispatch(getTotalInstallPrice());
      return;
    }

    dispatch(addWorkToOffer({...offer, typeWork: {...offer.typeWork, demolition: {title: type, price, qty: 1}}}));
    dispatch(getTotalInstallPrice());
  };

  const demolitionTypes = typeDoor === TypeDoors.INTERRIOR ? demolitionTypeList.slice(0, 1) : demolitionTypeList;

  return (
    <fieldset style={{ flex: 0.7 }}><h3>Демонтаж</h3>
      <div className="checkboxesList">
        {demolitionTypes.map((item) => (
          <div key={item.label} className={cn('checkboxField', 'middle')}>
            <label>
              <input data-type={item.data} type={'checkbox'}
                name={item.name} value={item.data}
                checked={demolition?.title === item.data}
                onChange={() => handleChangeDemolition(item.data, item.price)}
              />
              <span><b>{item.label}</b></span>
            </label>
          </div>
        )
        )}
      </div>
    </fieldset>
  );
}

