import { TypeDoors } from '../../consts';
import { useAppSelector } from '../../hooks/state';
import AditionalJobTable from '../aditional-job-table/aditional-job-table';
import ExterriorDoorsTable from '../exterrior-doors-table/exterrior-doors-table';
import InterriorDoorsTable from '../interrior-doors-table/interrior-doors-table';
import styles from './list-table.module.scss';

type ListTableProps = {
	title: string
}

export function ListTable({title}: ListTableProps): JSX.Element {
  const typeDoor = useAppSelector((state) => state.selectedTypeDoor);
  const selectedDoor = useAppSelector((state) => state.selectedDoor);

  return (
    <>
      <h3>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Наименование услуги</th>
            <th>Перечень работ</th>
            <th>Ед.изм.</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {typeDoor === TypeDoors.EXTERRIOR ? <ExterriorDoorsTable /> : null}
          {typeDoor === TypeDoors.INTERRIOR ? <InterriorDoorsTable /> : null}
          {selectedDoor ? <AditionalJobTable /> : null}
        </tbody>
      </table>
    </>
  );
}
