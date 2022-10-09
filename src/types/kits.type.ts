import { Price } from './price.type';
import { Product } from './product.type';

export type Kits = {
  code: number,
  products: Product[]
  title: string,
  totals: Price
}
