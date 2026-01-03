import Product, { tv as television, notebook as laptop, sunglasses}  from "./product.js";

class User {
    constructor(firstName, lastName, email, birthDate, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = new Date(birthDate);
        this.phoneNumber = phoneNumber;
        this.cart = [];
    }
    
    addToCart(product) {
        const tempCart = this.cart ?? [];
        tempCart.push(product);
        this.cart = tempCart;
    }

    removeCart(name) {
        const otherProducts = this.cart.filter((product) => product.name !== name)

        this.cart = otherProducts;
    }

    getTotalCartCost() {
        const price = this.cart.map((product) => product.price);
    }
}



const user1 = new User("Eva", "Miles", "eva.miles@example.com", "9/4/1993", "(946) 921-0345");

user1.addToCart(television);
user1.addToCart(laptop);

const user2 = new User("Amanda", "Hawkins", "amanda.hawkins@example.com", "8/6/1969", "(254) 304-5602");

user2.addToCart(laptop);
user2.addToCart(sunglasses);

console.log(user1);
console.log(user2);

