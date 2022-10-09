import SliderDoor from '../components/slider-door/slider-door';
import { DoorInstallation } from '../components/door-installation/door-installation';
import { ListTable } from '../components/list-table/list-table';
import { SearchDoorForm } from '../components/search-door-form/search-door-form';
import { OfferResult } from '../components/offer-result/offer-result';
import Header from '../components/header/header';
import { useState } from 'react';
import { useAppSelector } from '../hooks/state';
import { searchFilter } from '../utils/utils';

export default function MainPage(): JSX.Element {
  const exterriorDoors = useAppSelector((state) => state.exterriorDoors);
  const interriorDoors = useAppSelector((state) => state.interriorDoors);

  const [value, setValue] = useState('');
  const onSearchValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => (prevValue = evt.target.value));
  };

  const filteredExterriorDoors = exterriorDoors.filter((door) => searchFilter(door, value));
  const filteredInterriorDoors = interriorDoors.filter((door) => searchFilter(door, value));

  return (
    <div className="page main-page">
      <Header />
      <div className='container'>
        <SearchDoorForm onSearchValue={onSearchValue} value={value}/>
        {filteredExterriorDoors.length || filteredInterriorDoors.length ?
          <SliderDoor exterriorDoors={filteredExterriorDoors}
            interriorDoors={filteredInterriorDoors}
          /> :
          <div className='nothing'>
            <h3>Мы не нашли подходящих товаров</h3>
            <p>Попробуйте изменить условия поиска</p>
          </div>}

        <DoorInstallation />
        <ListTable title={''} />
        <OfferResult />
      </div>
    </div>
  );
}
