import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { IProduct, Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: IProduct[] = [];

  addProduct(
    productName: string,
    productDesc: string,
    productAddedDate: string,
  ) {
    const prodId = Math.random().toString();
    const product: IProduct = new Product(
      prodId,
      productName,
      productDesc,
      productAddedDate,
    );
    this.products.push(product);
    return prodId;
  }

  getProducts() {
    return of([...this.products]);
  }

  getProductById(productId: string) {
    const searchProduct =
      this.products.find((p) => p.prodid === productId) || {};
    return of(searchProduct);
  }

  updateProduct(
    productId: string,
    productName: string,
    productDesc: string,
    prodAddedDate: string,
  ) {
    const index = this.products.findIndex((p) => p.prodid === productId);
    if (index >= 0) {
      const product: IProduct = {
        productName: productName,
        productDesc: productDesc,
        prodAddedDate: prodAddedDate,
      };
      this.products[index] = product;
      return of(product);
    }
    return of(null);
  }

  deleteProduct(productId: string) {
    const index = this.products.findIndex((p) => p.prodid === productId);
    if (index >= 0) {
      return of(this.products.splice(index, 1));
    }
    return of(null);
  }
}
