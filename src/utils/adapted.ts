import { Product } from './../types/product.type';

export const ERROR_TOLERANCE_JOB = 60;

const getWidthHeight = (str: string) => {
  const arr = str.split(' ').reverse();
  const widthHeight = arr[1].split('х');

  const width = Number(widthHeight[0]);
  const height = Number(widthHeight[1]);

  return [Math.round(Number(width) / 100) * 100, Number(height)];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function adapter(products: any[]): Product[] {
  return products.map((productItem) => {
    const [width, length] = getWidthHeight(productItem.title);
    const {code, images, title, height, weight, price} = productItem;
    return {
      code,
      coverImage: productItem.cover_image,
      images,
      title,
      length,
      height,
      width,
      weight,
      price,
    };
  });
}


