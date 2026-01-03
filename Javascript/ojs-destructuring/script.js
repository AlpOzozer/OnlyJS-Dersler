const hotCoffees = {
  americanos: ["Caffè Americano", "Featured Blonde Roast", "Caffè Misto"],
  cappuccinos: [],
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
};

const coldCoffees = {
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
  americanos: ["Iced Caffè Americano"],
  icedCoffees: ["Iced Coffee", "Iced Coffee with Milk", "Iced Espresso"],
  iceShakenEspresso: [
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Iced Brown Sugar Oatmilk Shaken Espresso",
    "Iced Chocolate Almondmilk Shaken Espresso",
  ],
};


/*
const maleStudents = ["Ahmet", "Mehmet", "Osman"];
const femaleStudents = ["Ayşe", "Fatma", "Aleyna"];

const students = [...maleStudents, ...femaleStudents];

console.log(students);




console.log(coffees);

const coldBrews = coldCoffees.coldBrews;

console.log(coldBrews);

const [pumpkinCream, cinnamon, ...rest] = coldBrews;

console.log(pumpkinCream, "-", cinnamon, "-", rest);

*/

const americanosObject = [...hotCoffees.americanos, ...coldCoffees.americanos];

const coffees = {...hotCoffees, ...coldCoffees, ...{americanos: americanosObject}};


const { americanos: americanosMerged, lattes, mochas } = coffees;

console.log(americanosMerged);

const ahmet = {
  firstName: "Ahmet",
  lastName: "Yıldırım",
  age: 30,
  other: {
    bloodType: "A+",
    favoriteFruit: "Elma",
  },
};

function getUserInfo({ firstName, lastName, age = "???", other: { bloodType } }) {
   console.log(`Hoşgeldin ${firstName} ${lastName}`);
   console.log(`Şu an ${age} yaşındasın.`); 

   console.log(bloodType);
}

getUserInfo(ahmet);


