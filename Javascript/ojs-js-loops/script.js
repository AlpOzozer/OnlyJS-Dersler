// for (let i = 0; i < 10; i++) {
//     if (i === 4) {
//         continue;
//     }
// }

const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
};

const product = {
    name: "Kitap",
    price: 65,
    rating: 4.3,
    samedayDelivery: true,
};

for (key in product) {
    console.log(key, product[key]);
};


let i = 0;
while(i < 10) {
    console.log(i);
    i++;

    if (i === 6) {
        break;
    }
}
