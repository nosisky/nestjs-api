interface ProductObj {
    id: string;
    title: string;
    description: string;
    price: number
}
export class Product{
   
    constructor(public id: string, public title: string, public desc: string, public price: number){
    }
}