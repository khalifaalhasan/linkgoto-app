// src/types/link.ts
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
  type: 'standard' | 'product';
  price?: number; // Untuk produk e-commerce nantinya
}