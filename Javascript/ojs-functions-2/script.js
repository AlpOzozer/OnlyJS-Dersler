/*
function sum(num1, num2, ...rest) {
    let result = num1 + num2;

    for (const num of rest) {
        result += num;
    }

    return result;
}

const result = sum(5, 6, 9, 10, 3);
console.log(result);


function sum(num1, num2) {
    return num1 + num2;
}
    

const sum = (num1, num2) => {
    return num1 + num2;
}



const sum = (num1, num2) => num1 + num2;

const result = sum(5, 12);

console.log(result);

const numbers = [2, 6, 10, 50, 3, 1, 5];

numbers.map((number, index) => console.log(number, index));

const testBtnEl = document.getElementById("text-btn");

testBtnEl.addEventListener("click", () => console.log("Butona tıklandı"));


function countdown(num) {
    console.log(num);

    const nextNum = num - 1;
    if (nextNum > 0) {
        countdown(nextNum);
    }

    console.log("Bir sonraki sayıya geçiyoruz");
}

countdown(10);

console.log("Geri sayım bitti");

*/
const starbucksMenu = {
  drinks: {
    coffees: {
      hotCoffees: {
        americanos: ["Caffè Americano"],
        brewed: [
          "Featured Blonde Roast",
          "Featured Medium Roast",
          "Featured Dark Roast",
          "Caffè Misto",
        ],
        cappuccinos: ["Cappuccino"],
        flatWhites: ["Flat White", "Honey Almondmilk Flat White"],
        lattes: [
          "Caffè Latte",
          "Cinnamon Dolce Latte",
          "Pumpkin Spice Latte",
          "Blonde Vanilla Latte",
        ],
        macchiatos: [
          "Caramel Macchiato",
          "Apple Crisp Oatmilk Macchiato",
          "Espresso Macchiato",
        ],
        mochas: ["Caffè Mocha", "White Chocolate Mocha"],
      },
      coldCoffees: {
        coldBrews: [
          "Pumpkin Cream Cold Brew",
          "Oleato Golden Foam™ Cold Brew",
          "Cinnamon Caramel Cream Cold Brew",
          "Chocolate Cream Cold Brew",
          "Salted Caramel Cream Cold Brew",
          "Vanilla Sweet Cream Cold Brew",
        ],
        nitroColdBrews: [
          "Cinnamon Caramel Cream Nitro Cold Brew",
          "Nitro Cold Brew",
          "Vanilla Sweet Cream Nitro Cold Brew",
        ],
        icedAmericano: ["Iced Caffè Americano"],
        icedCoffees: ["Iced Coffee", "Iced Coffee with Milk", "Iced Espresso"],
        iceShakenEspresso: [
          "Iced Apple Crisp Oatmilk Shaken Espresso",
          "Iced Brown Sugar Oatmilk Shaken Espresso",
          "Iced Chocolate Almondmilk Shaken Espresso",
        ],
      },
      other: [
        "Caffè Vanilla Frappuccino®",
        "Caramel Brulée Frappuccino®",
        "Caramel Frappuccino®",
        "Caramel Ribbon Crunch Frappuccino®",
        "Cinnamon Dolce Crème Frappuccino®",
        "Coffee Frappuccino",
      ],
    },
  },
};

function extractMenuItems(menu) {
    let menuItems = [];

    for (let key in menu) {
        console.log(key);
        const value = menu[key];

        if (Array.isArray(value)) {
            menuItems.push(...value);
        }
        else {
            menuItems.push(extractMenuItems(value));
        }
    }

    return menuItems;
}

const menuItems = extractMenuItems(starbucksMenu);

console.log(menuItems);