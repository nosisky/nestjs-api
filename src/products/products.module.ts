import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductService]
})

export class ProductsModule {}
