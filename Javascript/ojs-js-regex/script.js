const pattern = /^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$/gm

const input = prompt("Telefon numarasını giriniz");
const isValid = pattern.test(input);
console.log(isValid);

const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, vero!";

const pattern2 = /[A-Z]/g;

const upperCaseLetters = paragraphText.match(pattern2);

console.log(upperCaseLetters);
