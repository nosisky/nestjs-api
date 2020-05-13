import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addproducts(
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ): any {
    const generatedId = this.productService.insertProduct(title, desc, price);
    return {
      id: generatedId,
    };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
 
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ) {
      this.productService.updateProduct(prodId, title, desc, price)

      return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string){
    this.productService.deleteProduct(prodId)
    return null;
  }
}
