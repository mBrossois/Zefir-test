interface Home {
  address: string;
  owner: string;
  currency: string;
  floor?: number;
  id: number;
  picture: string;
  price: number;
  priceFormatted?: string;
  rooms: number;
  surface: number;
  year?: number;
}

interface HomeFields {
  item: string;
  value: string;
}
