/*
const firstName = "uğur";

const ugurPc = {
    bozukMu: true,
    tamirEt: function () {
        console.log("bilgisayar tamir edildi");
    },
};

function servisIslemleri(bilgisayar, arama) {
    bilgisayar.tamirEt();
    bilgisayar.bozukMu = false;
    bilgisayar.tamirmaliyeti = 8000;
    arama(bilgisayar);
}

function uguruAra({tamirmaliyeti, bozukMu}) {
    console.log(`Merhabalar, bilgisayarınız ${bozukMu ? "tamir edilmedi" : "tamir edildi"
    }. maliyeti ${tamirmaliyeti} TL`
);
}

servisIslemleri(ugurPc, uguruAra);
*/

function printResultToElement(result) {
    document.getElementById("calculateResult").innerHTML = result;
}

function logResultToConsole(result) {
    console.log("İşlemin sonucu: " + result);
}

function triggerAlertFromResult(result) {
    alert(result);
}

function calculate(cb) {
    const num1 = +prompt("1. numarayı kontrol ediniz");
    const num2 = +prompt("2. numarayı kontrol ediniz");

    const result = num1 + num2;
    cb(result);
}

const people = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];

people.forEach((person) => console.log(person));
