class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const tv = new Product("Televizyon", 20000);
const laptop = new Product("Notebook", 35000);
const notebook = new Product("Kitap", 80);
const sunglasses = new Product("Güneş Gözlüğü", 4000);

export default Product;
export { tv, laptop, notebook, sunglasses}
