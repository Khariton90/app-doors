import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SliderCard } from '../slider-card/slider-card';
import 'swiper/css';
import 'swiper/css/navigation';
import { useAppSelector } from '../../hooks/state';
import styles from './slider-door.module.scss';
import { Product } from '../../types/product.type';

const SLIDES_PER_VIEW = 4;

const Doors = {
  INTERRIOR: 'interriorDoors',
  EXTERRIOR: 'exterriorDoors',
};

type SliderDoorProps = {
  interriorDoors: Product[],
  exterriorDoors: Product[]
}

export default function SliderDoor({interriorDoors, exterriorDoors}: SliderDoorProps): JSX.Element {
  const typeDoor = useAppSelector((state) => state.selectedTypeDoor);
  const codeSelectedDoor = useAppSelector((state) => state.selectedDoor?.code);

  const slideShowValue = (doors: Product[]) => doors.length > SLIDES_PER_VIEW ? SLIDES_PER_VIEW : doors.length;

  if (typeDoor === Doors.EXTERRIOR) {
    return (
      <div className={styles.sliderDoor}>
        <div className={'nextEl'}></div>
        <div className='prevEl'></div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={slideShowValue(exterriorDoors)}
          navigation={{nextEl: '.nextEl', prevEl: '.prevEl'}}
        >
          {exterriorDoors.map((door) => (<SwiperSlide key={door.code}><SliderCard door={door} code={codeSelectedDoor}/></SwiperSlide>))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className={styles.sliderDoor}>
      <div className={'nextEl'}></div>
      <div className='prevEl'></div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slideShowValue(interriorDoors)}
        navigation={{nextEl: '.nextEl', prevEl: '.prevEl'}}
      >
        {interriorDoors.map((door) => (<SwiperSlide key={door.code}><SliderCard door={door} code={codeSelectedDoor}/></SwiperSlide>))}
      </Swiper>
    </div>
  );
}
