import { useAppSelector } from '../../hooks/state';
import { FormDoorInstallation } from '../form-door-installation/form-door-installation';
import { FormDoorTypes } from '../form-door-types/form-door-types';

export function DoorInstallation(): JSX.Element {
  const selectedDoor = useAppSelector((state) => state.selectedDoor);

  const type = selectedDoor?.title.split('');

  const typeDoor = type?.includes('входная') || type?.includes('межкомнатная');

  if (selectedDoor) {
    return (
      <div>
        <h3>Монтаж. Двери</h3>
        <FormDoorInstallation selectedDoor={selectedDoor} disabled={false}/>
        <FormDoorTypes typeDoor={typeDoor}/>
      </div>
    );
  }

  return (
    <div>

    </div>
  );
}
