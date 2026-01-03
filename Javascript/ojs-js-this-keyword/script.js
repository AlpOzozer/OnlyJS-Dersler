const user1 = {
    firstName: "Mildred",
    lastName: "Parker",
    birthDate: new Date(1996, 5, 11),
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: function() {
        const birthDate = this.birthDate;
        const now = new Date();
        const birthDateEpoch = +birthDate;
        const nowEpoch = +now;

        const epochDifference = nowEpoch - birthDateEpoch;
        const oneYearInMs = 365 * 24 * 60 * 60 * 1000;
        const yearDifference = epochDifference / oneYearInMs;

        return Math.round(yearDifference);
    },
};

const userFullName = user1.fullName();

console.log(userFullName);

const age = user1.age();

console.log(age);

function testFunction() {
    this.name = "Uğur";
    console.log(this.name);
}

const myTestVariable = new testFunction();


const user2 = {
    firstName: "Gary",
    lastName: "Dixon",
    birthDate: new Date(1995, 6, 10),
};

const user2FullName = user1.fullName.bind(user2);
const user2Age = user1.age.bind(user2)();

console.log(user2Age);