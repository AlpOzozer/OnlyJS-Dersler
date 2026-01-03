/*
console.log(1);
consoleLogger();
console.log(4);

function consoleLogger() {
    console.log(2);
    console.log(3);
    consoleLogger2();

    function consoleLogger2() {
        console.log(5);
        console.log(6);
    }

    console.log(7);
}

function firstLog() {
    console.log(1);
}

function secondLog() {
    setTimeout(()=> {
        console.log(2);
    }, 0);
} 

function thirdLog() {
    console.log(3);
}

firstLog();
secondLog();
thirdLog();

const promise = new Promise((resolve, reject) => {
    const rand = Math.random();
        resolve({ firstName: "Ahmet" });
    if(rand < 0.5) {
        ("Başarılı");
    } else {
        reject("Bir sorun var")
    }
    
});

const result = promise
    .then((data) => {
        console.log(data);
        return data.user;
    })
    .catch((err) => {
        console.log("Bir hata oluştu. Mesaj:" + err)
    });

console.log(result);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("Bir hata oluştu: " + err);
});
*/


async function getTodo(id) {
    let data;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id
        );
        data = await response.json();
    } catch (err) {
        console.log(err);
        console.log("Bir hata oluştu: " + err);
    }

    return data;
}

async function main() {
    const todoItem1Promise = getTodo(1);
    const todoItem2Promise = getTodo(2);
    const todoItem3Promise = getTodo(3);
    const todoItem4Promise = getTodo(4);

    const  [todoItem1, todoItem2, todoItem3, todoItem4]= await Promise.all([
        todoItem1Promise,
        todoItem2Promise,
        todoItem3Promise,
        todoItem4Promise,
    ]);

    console.log(todoItem1, todoItem2, todoItem3, todoItem4);
}

main();