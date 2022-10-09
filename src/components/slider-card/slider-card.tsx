
import { prices, TypeDoors, WeightDoors, WeightExterriorDoor, WEIGHT_DOOR } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { changeIntallSizes, changeWeightExterriorDoor, getTotalInstallPrice, selectDoorAction } from '../../store/actions';
import { Product } from '../../types/product.type';
import styles from './slider-card.module.scss';

type SliderCardProps = {
  door: Product,
  code: number | undefined
}

export function SliderCard({door, code}: SliderCardProps): JSX.Element {
  const {doorConfigurationCard, content, doorType, description, descriptionTitle, contentImage} = styles;

  const typeSearchDoor = useAppSelector((state) => state.selectedTypeDoor);
  const dispatch = useAppDispatch();

  const handleChangeSelectedDoor = () => {
    dispatch(selectDoorAction(door));
    dispatch(changeIntallSizes(door.width));

    if (typeSearchDoor === TypeDoors.EXTERRIOR) {
      const price = door.weight >= WeightDoors.HIGH ? prices[WeightExterriorDoor.HeavyDoor] : prices[WeightExterriorDoor.EasyDoor];
      dispatch(changeWeightExterriorDoor({title: WEIGHT_DOOR, price, qty: 1}));
      dispatch(getTotalInstallPrice());
    }
  };

  return (
    <div className='unselectable'>
      <div className={doorConfigurationCard} onClick={handleChangeSelectedDoor}>
        <div className={content}>
          <input type="radio" className={doorType} name="configurationType" checked={code === door.code} readOnly/>
          <div className={contentImage}>
            <img src={door.coverImage} alt="" width={'296px'} height="296px"/>
          </div>

        </div>

        <div className={description}>
          <div>
            <p className={descriptionTitle}>
              <b>{door.title}</b>
            </p>
            <p>Код: {door.code}</p>
          </div>
          <p className='annotation'>

          </p>
          <div className='block2'>
            <p className={descriptionTitle}>

            </p>
            <p className='setSummary'>

            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
