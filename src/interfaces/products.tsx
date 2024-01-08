export interface Product {
  id: Number;
  title: String;
  price: Number;
  description: String;
  category: String;
  image: String;
  rating: Rating;
}

export interface Rating {
  count: Number;
  rate: Number;
}
