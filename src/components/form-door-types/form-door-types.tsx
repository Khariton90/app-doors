import { TypeDoors } from '../../consts';
import { useAppSelector } from '../../hooks/state';

import { CustomInputCheckbox } from '../custom-input-checkbox/custom-input-checkbox';
import DemolitionCheckboxesList from '../demolition-checkboxes-list/demolition-checkboxes-list';
import OpenDesignCheckbox from '../open-design-checkbox/open-design-checkbox';
import { WallMaterialCheckboxesList } from '../wall-material-checkboxes-list/wall-material-checkboxes-list';

const installationTypeList = [
  { id: 1, name: 'type-installation', label: 'стандарт', types: 'входная' },
  { id: 2, name: 'type-installation', label: 'арка', types: 'арка' },
  { id: 3, name: 'type-installation', label: 'портал', types: 'арка' },
  { id: 4, name: 'type-installation', label: 'двухстворчатая', types: 'арка' },
];

const openingTypeList = [
  { id: 1, name: 'type-opening', label: 'левая', types: 'левая' },
  { id: 2, name: 'type-opening', label: 'правая', types: 'правая' },
  { id: 3, name: 'type-opening', label: 'раздвижная', types: 'раздвижная' },
];

const furnitureTypeList = [
  { id: 1, name: 'type-furniture', label: 'защелка' },
  { id: 2, name: 'type-furniture', label: 'замок' },
  { id: 3, name: 'type-furniture', label: 'завертка' },
  { id: 4, name: 'type-furniture', label: 'магнитный замок' },
];

type FormDoorTypesProps = {
  typeDoor: boolean | undefined
}

export function FormDoorTypes({ typeDoor }: FormDoorTypesProps): JSX.Element {
  const typeDoors = useAppSelector((state) => state.selectedTypeDoor);

  const demolition = useAppSelector((state) => state.offer.typeWork.demolition);

  return (
    <form className="doorInstallation">
      <div className="row">
        <fieldset>
          <h3>Тип двери, <span>V</span></h3>
          <div className="checkboxesList">
            {
              installationTypeList.map((type) => (
                <CustomInputCheckbox
                  key={type.id}
                  name={type.name}
                  label={type.label}
                  types={type.types}
                />
              ))
            }
          </div>
        </fieldset>

        <fieldset style={{ flex: 0.7 }}><h3>Вид открытия <span>V</span></h3>
          <div className="checkboxesList">
            {
              openingTypeList.map((type) => (
                <CustomInputCheckbox
                  key={type.id + type.name}
                  name={type.name}
                  label={type.label}
                  types={type.types}
                />
              ))
            }
          </div>
        </fieldset>
        <OpenDesignCheckbox />
      </div>

      <div className="row">
        <WallMaterialCheckboxesList />
        <DemolitionCheckboxesList typeDoor={typeDoors} demolition={demolition}/>
        {
          typeDoors === TypeDoors.INTERRIOR ?
            <fieldset><h3>Фурнитура, <span>V</span></h3>
              <div className="checkboxesList">
                {
                  furnitureTypeList.map((type) => (
                    <CustomInputCheckbox
                      key={type.id}
                      name={type.name}
                      type='checkbox'
                      label={type.label} types={''}
                    />
                  ))
                };
              </div>
            </fieldset> :
            <fieldset></fieldset>
        }

      </div>
    </form>
  );
}
