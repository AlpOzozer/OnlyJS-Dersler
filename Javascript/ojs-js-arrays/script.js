const products = [
    {
        name: "Kahve",
        price: 80,
        sameDayDelivery: true,
        rating: 4.6,
    },
    {
        name: "Kitap",
        price: 90,
        sameDayDelivery: false,
        rating: 4.2,
    }
];

const filteredProducts = products.filter(function (product){
    return product.rating >= 4.3 && product.sameDayDelivery === true;
});

console.log(filteredProducts);

const foundProduct = products.find((product) => {
    return product.name === "Kitap";
});

console.log(foundProduct);

const productPrices = products.map(function (product) {
    return product.price;
});

console.log(productPrices);

products.forEach(function (product) {
    console.log(product.name);
});

const hasBadQualityProducts = products.some(function (product) {
    return product.rating < 3;
});

console.log(hasBadQualityProducts);

const hasPerfectProducts = products.name(function (product) {
    return product.rating === 5;
});

console.log(hasPerfectProducts);

