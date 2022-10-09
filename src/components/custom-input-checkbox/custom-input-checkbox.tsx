import cn from 'classnames';
import { useAppSelector } from '../../hooks/state';

type CustomInputCheckboxProps = {
  name: string,
  label: string,
  types: string
  value?: boolean,
  type?: string,
  size?: string,
  disabled?: boolean,
  onBlur?: (value: string) => string
}

export function CustomInputCheckbox({ type, name, label, size, disabled, value, types, onBlur }: CustomInputCheckboxProps): JSX.Element {
  const classSizeCheckbox = size ? 'little' : 'middle';
  const selectedDoor = useAppSelector((state) => state.selectedDoor);

  return (
    <div className={cn('checkboxField', classSizeCheckbox)}>
      <label>
        <input type={type || 'radio'}
          name={name}
          disabled={disabled}
          data-name={label}
          checked={types ? !!selectedDoor?.title.includes(types) : false}
          readOnly
        />
        <span><b>{label}</b></span>
      </label>
    </div>
  );
}
