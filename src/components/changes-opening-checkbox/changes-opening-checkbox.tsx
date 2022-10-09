
type ChangesOpeningCheckboxProps = {
  changes: boolean
  title: string
}

export function ChangesOpeningCheckbox({changes, title}: ChangesOpeningCheckboxProps): JSX.Element {
  return (
    <label className='devation-type'>
      <input type="checkbox" disabled={changes}/><span>{title}<br/>проема</span>
    </label>
  );

}
