import { Injectable } from '@nestjs/common';
import { CreateProduct, createProductShema, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: CreateProduct) {
    const parsed = createProductShema.safeParse(product);
    if (!parsed.success) {
      throw new Error(parsed.error.message);
    }

    const newProduct: Product = {
      id: Math.random().toString(36).substring(7),
      ...parsed.data,
    };

    this.products.push(newProduct);

    return {
      product: newProduct,
    };
  }

  findAll() {
    return {
      products: this.products,
    };
  }
}
