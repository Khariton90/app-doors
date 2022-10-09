import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/state';
import { changeIntallSizes } from '../../store/actions';

type InputFieldProps = {
  placeholder?: number | null
  label: string
  value: number | null,
}

export function InputField({placeholder, label, value}: InputFieldProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value !== '') {
      dispatch(changeIntallSizes(Number(evt.target.value)));
      return;
    }
    dispatch(changeIntallSizes(null));
  };

  return (
    <div className="inputField">
      <label htmlFor="">
        <input type="number"
          placeholder={placeholder?.toString()}
          value={value ? value?.toString() : ''}
          onChange={handleChangeInputValue}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
