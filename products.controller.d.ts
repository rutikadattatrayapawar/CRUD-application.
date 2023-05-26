import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(productName: string, productDesc: string, productAddedDate: string): string;
    getProducts(): import("rxjs").Observable<import("./product.model").IProduct[]>;
    getProductById(productId: string): import("rxjs").Observable<import("./product.model").IProduct>;
    updateProduct(productId: string, productName: string, productDesc: string, prodAddedDate: string): import("rxjs").Observable<import("./product.model").IProduct>;
    deleteProduct(productId: string): import("rxjs").Observable<import("./product.model").IProduct[]>;
}
