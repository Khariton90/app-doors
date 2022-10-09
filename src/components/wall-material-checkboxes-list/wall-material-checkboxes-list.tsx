import cn from 'classnames';
import { prices, Wall } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { changeWallMaterial, getTotalInstallPrice } from '../../store/actions';

const wallMaterialTypeList = [
  { id: 1, name: 'type-wall-material', label: 'бетон', data: Wall.Beton, price: prices[Wall.Beton] },
  { id: 2, name: 'type-wall-material', label: 'кирпич/газобетон', data: Wall.Brick, price: prices[Wall.Default] },
  { id: 3, name: 'type-wall-material', label: 'дерево', data: Wall.Wood, price: prices[Wall.Default] },
  { id: 4, name: 'type-wall-material', label: 'гипсокартон', data: Wall.GypsumBoard, price: prices[Wall.Default] },
];


export function WallMaterialCheckboxesList(): JSX.Element {
  const narrowing = useAppSelector((state) => state.offer.wallNarrowing);
  const dispatch = useAppDispatch();

  const handleChangeWallMaterial = (title: Wall, price: number) => {
    if (narrowing.title !== title) {
      dispatch(changeWallMaterial({title, price}));
      dispatch(getTotalInstallPrice());
      return;
    }

    dispatch(changeWallMaterial({title: Wall.Beton, price: prices.BETON}));
    dispatch(getTotalInstallPrice());
  };

  return (
    <fieldset><h3>Mатериал стен, <span>V</span></h3>
      <div className={cn('checkboxesList')}>
        {wallMaterialTypeList.map((type) => (
          <div key={type.id} className="checkboxField middle">
            <label>
              <input
                type={'checkbox'}
                name={type.name}
                data-type={type.data}
                checked={narrowing.title === type.data}
                onChange={() => handleChangeWallMaterial(type.data, type.price)}
              />
              <span><b>{type.label}</b></span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
