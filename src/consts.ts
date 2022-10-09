import { Work } from './types/offer.type';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Total = '/total'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const DEVIATION_RANGE = 30;

export const TypeDoors = {
  INTERRIOR: 'interriorDoors',
  EXTERRIOR: 'exterriorDoors'
};

export const WeightDoors = {
  LOW: 94,
  HIGH: 95
};

export enum Demolition {
  Default = 'DEFAULT',
  Easy = 'EASY',
  Middle = 'MIDDLE',
  Heavy = 'HEAVY'
}

export enum TypeOpening {
  Default = 'DEFAULT',
  Left = 'LEFT',
  Right = 'RIGHT',
  Sliding = 'SLIDING'
}

export enum DoorClass {
  Standart = 'STANDART',
  Arch = 'ARCH',
  Portal = 'PORTAL',
  Double = 'DOUBLE'
}

export enum Wall {
  Default = 'DEFAULT',
  Beton = 'BETON',
  Brick = 'Brick',
  Wood = 'WOOD',
  GypsumBoard = 'GYPSUMBOARD'
}

export enum WeightExterriorDoor {
  EasyDoor = 'EASY_DOOR',
  HeavyDoor = 'HEAVY_DOOR'
}

export const OPEN_DESIGN = 'OPEN_DESIGN';
export const WALL_NARROWING = 'WALL_NARROWING';
export const WALL_EXTENTION = 'WALL_EXTENTION';
export const WEIGHT_DOOR = 'WEIGHT_DOOR';

export const prices = {
  [Demolition.Easy]: 700,
  [Demolition.Middle]: 1500,
  [Demolition.Heavy]: 2500,
  [Wall.Default]: 600,
  [Wall.Brick]: 600,
  [Wall.Wood]: 600,
  [Wall.GypsumBoard]: 600,
  [Wall.Beton]: 900,
  OPEN_DESIGN: 2300,
  WALL_NARROWING: 400,
  [WeightExterriorDoor.EasyDoor]: 3400,
  [WeightExterriorDoor.HeavyDoor]: 4400
};

export const DefaultExtention: Work = {
  title: WALL_EXTENTION,
  price: prices.WALL_NARROWING,
  qty: 0
};

export const DefaultNarrowing: Work = {
  title: Wall.Beton,
  price: prices.BETON,
  qty: 0
};

export const defaultWeightDoor: Work = {
  title: WEIGHT_DOOR,
  price: prices[WeightExterriorDoor.EasyDoor],
  qty: 0
};

export const initialOffer = {
  id: 1,
  product: {
    code: 0,
    coverImage: '',
    images: [''],
    title: '',
    length: 0,
    height: 0,
    width: 0,
    weight: 0,
    price: {
      gold: 0,
      retail: 0
    },
  },
  installing: {
    width: 0,
    length: 0,
    widthExtention: 0,
    lengthExtention: 0,
    widthNarrowing: 0,
    lengthNarrowing: 0,
  },
  typeWork: {
    typeDoor: DoorClass.Standart,
    typeOpening: TypeOpening.Default,
    openDesign: null,
    demolition: null,
    weightDoor: defaultWeightDoor
  },
  wallExtention: DefaultExtention,
  wallNarrowing: DefaultNarrowing,
  totalInstallPrice: 0,
  totalPrice: 0
};


