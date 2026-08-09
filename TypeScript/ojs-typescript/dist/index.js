const person1 = {
    name: "Osman",
    age: 30,
    eat: (food) => {
        console.log("Kişi " + food + " yedi");
    },
    walk: (km) => {
        console.log("Kişi" + km + "km yol yürüdü");
        return km;
    }
};
const person2 = {
    name: "Ali",
    age: 40,
    eat: (food) => {
        console.log("Ali " + food + " isimli yemeği yedi");
    },
    walk: (km) => {
        console.log("Kişi" + km + "km yol yürüdü bugün");
        return km;
    }
};
function greetHuman(human) {
    console.log("merhaba " + human.name);
}
export {};
//# sourceMappingURL=index.js.map