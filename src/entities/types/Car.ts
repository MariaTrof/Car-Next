export interface RawCar {
  mark_id: string;
  folder_id: string;
  price: number;
  images: {
    image: string[];
  };
  // Остальные поля не обязательные
  [key: string]: any;
}

export interface FormattedCar {
  id: number;
  name: string;
  price: number;
  image: string;
}
