import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductService{
    private products: Product[] = []

    insertProduct(title: string, description: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct); 
        return prodId;
    }

    getProducts(){
        return [...this.products]
    }

    getSingleProduct(productId){
        const product = this.findProduct(productId)[0];

        if(!product){
            throw new NotFoundException('Cound not find product')
        }

        return {...product}
    }

    updateProduct(prodId: string, title: string, description: string, price: number){
        const [product, index] = this.findProduct(prodId);
        const updateProduct = {...product }
        if(title){
            updateProduct.title = title;
        }
        if(description){
            updateProduct.desc = description;
        }

        if(price){
            updateProduct.price = price;
        }

        this.products[index] = updateProduct;

    }

    deleteProduct(prodId: string){
        const index = this.findProduct(prodId)[1]
        this.products.splice(index, 1)
    } 

    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex((prod) => prod.id === id);

        const product = this.products[productIndex];
        return [product, productIndex];

    }
}