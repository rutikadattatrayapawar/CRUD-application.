import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('name') productName: string,
    @Body('description') productDesc: string,
    @Body('addedon') productAddedDate: string,
  ) {
    return this.productsService.addProduct(
      productName,
      productDesc,
      productAddedDate,
    );
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductById(productId);
  }

  @Put(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('name') productName: string,
    @Body('description') productDesc: string,
    @Body('addedon') prodAddedDate: string,
  ) {
    return this.productsService.updateProduct(
      productId,
      productName,
      productDesc,
      prodAddedDate,
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId: string) {
    return this.productsService.deleteProduct(productId);
  }
}
