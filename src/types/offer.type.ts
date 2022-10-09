import { DoorClass, TypeOpening } from '../consts';
import { Product } from './product.type';

export type Work = {
  title: string,
  price: number,
  qty: number
}

export type Installing = {
  width: number,
  length: number,
  widthExtention: number,
  lengthExtention: number,
  widthNarrowing: number,
  lengthNarrowing: number
}

export type TypeWork = {
  typeDoor: DoorClass,
  typeOpening: TypeOpening,
  openDesign: Work | null,
  demolition: Work | null,
  weightDoor: Work
}

export type Offer = {
  id: number,
  product: Product,
  installing: Installing,
  typeWork: TypeWork,
  wallExtention: Work,
  wallNarrowing: Work,
  totalInstallPrice: number,
  totalPrice: number
}
