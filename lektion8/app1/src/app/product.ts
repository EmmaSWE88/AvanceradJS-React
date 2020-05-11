export class Product {
    constructor(
        public id: number,
        public name: string,
        public desc: string,
        public price: number,
        
        
    ) { 
        this.id = id,
        this.name = name,
        this.price = price,
        this.desc = desc
    }
}
