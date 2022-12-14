import cn from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TypeDoors } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { addNarrowingOrExtention, getTotalInstallPrice } from '../../store/actions';
import { Installing } from '../../types/offer.type';
import { Product } from '../../types/product.type';
import { getPlaceholder } from '../../utils/utils';
import { InputField } from '../input-field/input-field';

type FormDoorInstallationProps = {
  selectedDoor: Product,
  disabled: boolean
}

export function FormDoorInstallation({ selectedDoor, disabled }: FormDoorInstallationProps): JSX.Element {
  const selectedTypeDoor = useAppSelector((state) => state.selectedTypeDoor);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: {
      errors,
    },
    reset, watch
  } = useForm({ mode: 'onChange' });

  const { width, length, depth } = watch();

  const [maxWidth, minWidth] = getPlaceholder(selectedDoor.width);
  const [maxLength, minLength] = getPlaceholder(selectedDoor.length);
  const depthValue = depth > 100 ? Math.round(depth / 100) : 1;

  const widthExtention = width && width > maxWidth - 40 ? 2 * depthValue : 0;
  const widthNarrowing = width && width < minWidth + 30 ? 2 * depthValue : 0;

  const lengthExtention = length && length > maxLength - 20 ? 1 * depthValue : 0;
  const lengthNarrowing = length && length < minLength + 60 ? 1 * depthValue : 0;


  const handleBlurForm = () => {

    const installing: Installing = {
      width: Number(width),
      length: Number(length),
      widthExtention: widthExtention,
      lengthExtention: lengthExtention,
      widthNarrowing: widthNarrowing,
      lengthNarrowing: lengthNarrowing,
    };
    dispatch(addNarrowingOrExtention(installing));
    dispatch(getTotalInstallPrice());
  };

  useEffect(() => {
    reset();
  }, [disabled, reset, selectedDoor]);

  return (
    <form className={cn('doorInstallation', { 'disabled-area unselectable': disabled })} onBlur={handleBlurForm}>
      <div className="row">
        <fieldset style={{ flex: 0.8 }}>
          <h3>???????????? ????????????, <span>????</span></h3>
          <div className={cn('row', 'fieldsetNumber')}>

            <div className="inputField">
              <label>
                <input type="number" placeholder={disabled ? '0' : `${maxWidth} - ${minWidth}`}
                  autoComplete="off"
                  className={cn({'errorBorder': errors?.width?.message})}
                  {...register('width',
                    {
                      required: '???????????????????????? ????????',
                      min: {
                        value: minWidth,
                        message: '???????????????????? ???????????????? ????????????????????'
                      },
                      max: {
                        value: maxWidth,
                        message: '???????????????????? ???????????????? ??????????????'
                      },
                    })}
                />
                <span>????????????</span>
              </label>
            </div>
            <div className="inputField">
              <label>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder={disabled ? '0' : `${maxLength} - ${minLength}`}
                  className={cn({'errorBorder': errors?.length?.message})}
                  {...register('length',
                    {
                      required: '???????????????????????? ????????',
                      min: {
                        value: minLength,
                        message: '???????????????????? ???????????????? ????????????????????'
                      },
                      max: {
                        value: maxLength,
                        message: '???????????????????? ???????????????? ??????????????'
                      }
                    })}
                />
                <span>????????????</span>
              </label>
            </div>
            <div className="inputField">
              <label htmlFor="">
                <input
                  type="number"
                  {...register('depth')}
                  autoComplete="off"
                />
                <span>??????????????</span>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset><h3>?????????????????? ?????????????? ????????????, <span>??.??.</span></h3>
          <div className={cn('row', 'fieldsetNumber')}>
            <div className="inputField">
              <label htmlFor="">
                {
                  widthExtention ?
                    <input type="number"
                      value={widthExtention ?? 0}
                      readOnly
                      {...register('widthOpening')}
                    /> :
                    <input type="number"
                      value={widthNarrowing ?? 0}
                      readOnly
                      {...register('widthOpening')}
                    />
                }

                <span>????????????</span>
              </label>
            </div>
            <div className="inputField">
              <label htmlFor="">
                {
                  lengthExtention ?
                    <input type="number"
                      readOnly
                      value={lengthExtention ?? 0}
                      {...register('lengthOpening')}
                    /> :
                    <input type="number"
                      readOnly
                      value={lengthNarrowing ?? 0}
                      {...register('lengthOpening')}
                    />
                }
                <span>????????????</span>
              </label>
            </div>
          </div>
        </fieldset>
        {
          selectedTypeDoor === TypeDoors.INTERRIOR ?
            <fieldset><h3>??????????, <span>????</span></h3>
              <div className={cn('row fieldsetNumber')}>
                <InputField label={''} value={null} />
              </div>
            </fieldset> :
            null
        }
      </div>

      <div className={cn('row', 'fieldsetNumber')}>
        {
          selectedTypeDoor === TypeDoors.INTERRIOR ?
            <>
              <fieldset style={{ flex: 0.8 }}>
                <h3>??????????????????????????<br /> ???????????? ??????????????, <span>????</span></h3>
                <div className={cn('row', 'fieldsetNumber')}>
                  <InputField value={null} label="" />
                  <InputField value={null} label="" />
                </div>
              </fieldset>
              <fieldset><h3>???????????? ????????????/<br />?????????????????? ??????????, <span>????</span></h3>
                <div className={cn('row', 'fieldsetNumber')}>
                  <InputField value={null} label="" />
                </div>
              </fieldset>
              <fieldset><h3>??????????????????<br/>????????????, <span>????</span></h3>
                <div className={cn('row fieldsetNumber')}>
                  <InputField label={''} value={null} />
                </div>
              </fieldset>
            </> :
            null
        }
      </div>
    </form>
  );
}
