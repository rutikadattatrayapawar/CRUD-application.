"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    addProduct(productName, productDesc, productAddedDate) {
        const prodId = Math.random().toString();
        const product = new product_model_1.Product(prodId, productName, productDesc, productAddedDate);
        this.products.push(product);
        return prodId;
    }
    getProducts() {
        return (0, rxjs_1.of)([...this.products]);
    }
    getProductById(productId) {
        const searchProduct = this.products.find((p) => p.prodid === productId) || {};
        return (0, rxjs_1.of)(searchProduct);
    }
    updateProduct(productId, productName, productDesc, prodAddedDate) {
        const index = this.products.findIndex((p) => p.prodid === productId);
        if (index >= 0) {
            const product = {
                productName: productName,
                productDesc: productDesc,
                prodAddedDate: prodAddedDate,
            };
            this.products[index] = product;
            return (0, rxjs_1.of)(product);
        }
        return (0, rxjs_1.of)(null);
    }
    deleteProduct(productId) {
        const index = this.products.findIndex((p) => p.prodid === productId);
        if (index >= 0) {
            return (0, rxjs_1.of)(this.products.splice(index, 1));
        }
        return (0, rxjs_1.of)(null);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map