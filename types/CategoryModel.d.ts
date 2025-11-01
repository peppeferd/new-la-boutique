interface CategoryModel {
  name: string;
  description: string;
}

interface ProductModel {
  name: string;
  description: string;
  category: CategoryModel[];
  price: number;
  imageUrl: string;
  sizes: string[];
  TopProduct: string;
  NewArrival: string;
  countInStock: number;
  images: string[];
  features: string[];
  rating: number;
}
