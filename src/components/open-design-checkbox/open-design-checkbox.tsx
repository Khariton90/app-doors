import cn from 'classnames';
import { OPEN_DESIGN, prices } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { addWorkToOffer, getTotalInstallPrice } from '../../store/actions';

export default function OpenDesignCheckbox(): JSX.Element {
  const offer = useAppSelector((state) => state.offer);
  const dispatch = useAppDispatch();

  const handleChangeOpenDesign = () => {
    if (offer.typeWork.openDesign?.qty) {
      dispatch(addWorkToOffer(
        {...offer,
          typeWork: {
            ...offer.typeWork,
            openDesign: null
          }
        })
      );
      dispatch(getTotalInstallPrice());
      return;
    }

    dispatch(addWorkToOffer({...offer,
      typeWork: {
        ...offer.typeWork,
        openDesign:
        {
          title: OPEN_DESIGN,
          price: prices[OPEN_DESIGN],
          qty: 1
        }
      }
    }));
    dispatch(getTotalInstallPrice());
  };

  return (
    <fieldset>
      <h3>Оформление проема</h3>
      <div className={cn('checkboxField', 'middle')}>
        <label>
          <input type={'checkbox'} name={OPEN_DESIGN} onChange={handleChangeOpenDesign}/>
          <span><b>{'оформление'}</b></span>
        </label>
      </div>
    </fieldset>
  );
}
