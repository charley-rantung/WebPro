// Arrow Function

function ucapkanSalam(){
    return 'selamat pagi';
}

const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil = bilangan1 + bilangan2;
    return hasil;
}

console.log(operasiPenjumlahan(3,4));

// tanpa parameter
const namaJenisAnjing = () => {
    const anjing = ["pug","bulldog","pudle"];

    //mencari nilai random
    return anjing[Math.floor(Math.random()*(anjing.length))];
}

console.log(namaJenisAnjing());

// Implicit Return Value
// artinya mengembalikan nilai secara langsung tanpa mendeklarasikan variabel atau operasi didalamnya.

function greeting(nama){
    return `Hi ${nama}`;
}

console.log(greeting('Charley'));

const greeting2 = nama => `Hi ${nama}`;

console.log(greeting2('Charley2'));

// tanpa parameter
const namaFungsi = () => 'Hi Charley.tp';
console.log(namaFungsi())

//EXERCISE #03
function yearUntilRetirement5(year, firstName) {
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + " retired in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired.")
    }
}

//Convert to ES6 Syyntax

const yearUntilRetirement6 = (year, firstName) => {
    let age = 28;
    let retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstname} retired in ${retirement} years`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
}

yearUntilRetirement5(2020, 'Charley');