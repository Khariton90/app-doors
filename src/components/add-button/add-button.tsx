import styles from './add-button.module.scss';

type AddButtonProps = {
  addBlankDoorHandle: () => void
}

export function AddButton({addBlankDoorHandle}: AddButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={addBlankDoorHandle}>
      Добавить
    </button>
  )
}