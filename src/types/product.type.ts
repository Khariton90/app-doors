import { Price } from './price.type';

export type Product = {
    code: number,
    coverImage: string,
    images: string[],
    title: string,
    length: number,
    height: number,
    width: number,
    weight: number,
    price: Price,
};
