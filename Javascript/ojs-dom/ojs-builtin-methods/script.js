/*
const name = "Uğur İlter";

const nameArray = name.split(" ");
console.log(nameArray);

const nameArray2 = ["John", "Smith"];

const name2 = nameArray2.join(" ");

console.log(name2);

const message1 = "  Merhaba Dünya  ";
console.log(message1);

const message1New = message1.replace("Merhaba", "Selam");
console.log(message1New);

const trimmedMessage1 = message1New.trim();
console.log(trimmedMessage1);

const emailInputValue = "aaaAAAaaa";

const email = emailInputValue.toLowerCase();

console.log(email);

const email2 = emailInputValue.toUpperCase();

console.log(email2);


const primaryInfo = {
    firstname: "Uğur",
    lastName: "Eren",
};

console.log(primaryInfo);

const extraInfo = {
    bloodType: "a-",
    job: "coder",
};

const fullInfo = Object.assign({}, primaryInfo, extraInfo);

console.log(fullInfo);

const fullInfoKeys = Object.keys(fullInfo);
console.log(fullInfoKeys);

const fullInfoValues = Object.values(fullInfo);
console.log(fullInfoValues);

const fullInfoEntries = Object.entries(fullInfo);
console.log(fullInfoEntries);


const firstNumber = 5.28;
const secondNumber = 5.6;

console.log(firstNumber, Math.round(firstNumber), Math.floor(firstNumber), Math.ceil(firstNumber));
console.log(secondNumber, Math.round(secondNumber));

console.log(Math.min(5,2,6,10,100,1000));
console.log(Math.max(5,2,6,10,100,1000));

console.log(Math.abs(-58));
console.log(Math.random());
*/

const now = new Date();
console.log(now);

const year = now.getFullYear();
console.log(year);

const month = now.getMonth();
console.log(month);

const monthDay = now.getDate();
console.log(monthDay);

const weekDay = now.getDay();
console.log(weekDay);

const hour = now.getHours();
console.log(hour);

const minute = now.getMinutes();
console.log(minute); 

const second = now.getSeconds();
console.log(second);

const tomorrow = new Date(now);
tomorrow.setDate(monthDay + 1);

console.log(tomorrow);

console.log(Date.now());

const testDate = new Date(2023, 3, 9, 8, 10, 30);
console.log(testDate);

const testDateString = testDate.toString();

