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