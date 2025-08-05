// src/types/product.d.ts
interface Product {
  id: string;
  name: string;
  picture: string;
  description?: string;
  price?: number;
}

interface Category {
  name: string;
  picture: string;
  url: string;
  description: string;
}

interface ApiResponse<T> {
  hasError: boolean;
  message?: string;
  result: T[];
}