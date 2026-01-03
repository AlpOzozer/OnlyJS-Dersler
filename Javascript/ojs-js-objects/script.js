const person1 = {
    firstName: "Angela",
    secondName: "Trahan",
    gender: "female",
    contactInformation: {
        phoneNumbers: {
            primary: "757-217-6128",
            secondary: "757-521-3865",
        },
        email: "myron@braku9@yahoo.com",
    },
};

console.log(person1.firstName);

console.log(person1["contactInformation"]["phoneNumbers"]["primary"]);

person1.firstName = "Anh";

console.log(person1.firstName);
