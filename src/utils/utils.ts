import { Work } from '../types/offer.type';
import { Product } from '../types/product.type';
import { ERROR_TOLERANCE_JOB } from './adapted';


export const getPlaceholder = (value: number): number[] => {
  const values = [];
  if (!value) {
    return [];
  }

  if (value > 1800) {
    const max = value + ERROR_TOLERANCE_JOB;
    const min = value - 50;

    values.push(max, min);
    return values;
  }

  const max = value + 40;
  const min = value - 60;

  values.push(max, min);
  return values;
};


export const searchFilter = (door:Product, value:string) => {
  if (value) {
    if (door.code === +value) {
      return door;
    }

    if (door.code.toString().includes(value)) {
      return door;
    }

    if (door.title.toLowerCase().includes(value.toLowerCase())) {
      return door;
    }
    return null;
  }

  return door;
};

export const getIncId = (id: number): number => id++;

export const getTotalPrice = (...entitys: Work[]): number => {
  const total = entitys.reduce((acc, item) => (item.price * item.qty) + acc , 0);

  return total;
};
