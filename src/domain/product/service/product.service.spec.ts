
import Product from "../entity/Products"
import ProductService from "./product.service"

describe("Product service unit tests", ()=>{
    it("should change the price of all products", ()=>{

        const product1 = new Product("1", "Product 1", 10)
        const product2 = new Product("2", "Product 2", 20)
        const product3 = new Product("3", "Product 3", 10)

        const products = [product1, product2, product3]

        ProductService.increasePrice(products, 100)
        
        expect(product1.price).toBe(20)
        expect(product2.price).toBe(40)
        expect(product3.price).toBe(20)

    })
})