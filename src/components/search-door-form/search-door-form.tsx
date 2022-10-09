import cn from 'classnames';
import { ChangeEvent } from 'react';
import { TypeDoors } from '../../consts';
import { useAppDispatch } from '../../hooks/state';
import { changeTypeSearchDoor } from '../../store/actions';
import styles from './search-door-form.module.scss';

type SearchDoorFormProps = {
  onSearchValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

export function SearchDoorForm({onSearchValue, value}: SearchDoorFormProps): JSX.Element {
  const { searchForm, searchField, doorTypesField } = styles;
  const dispatch = useAppDispatch();

  return (
    <div className={searchForm}>
      <h3>Модель двери</h3>

      <label htmlFor="" className={searchField}>
        <input type="search" value={value} onChange={onSearchValue}/>
        <span>Введите название или код</span>
      </label>

      <fieldset className={doorTypesField}>
        <div className={cn('checkboxField')}>
          <label className='checkboxField little'>
            <input type={'radio'} name="door-type" value={TypeDoors.EXTERRIOR} defaultChecked onChange={(evt) => dispatch(changeTypeSearchDoor(evt.target.value))}/>
            <span><b>входная</b></span>
          </label>
        </div>
        <div className={cn('checkboxField')}>
          <label className='checkboxField little'>
            <input type={'radio'} name="door-type" value={TypeDoors.INTERRIOR} onChange={(evt) => dispatch(changeTypeSearchDoor(evt.target.value))}/>
            <span><b>межкомнатная</b></span>
          </label>
        </div>
      </fieldset>
      <div>
        {/* <p>Развернуть</p>
        <p>Удалить</p> */}
      </div>
    </div>
  );
}
