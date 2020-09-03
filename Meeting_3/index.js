//node index.js
/*
1. Variabel dan tipe data
    let umur = 20;
    const nama = "charley";
    variabel boleh diawali dengan _ atau &
Tipe data
    string
    number
    boolean
        null
        undefined
            object
Type coercion
*/

const firstName = 'John';
let age = 20;
age = 21;
const isMarried = true;

console.log(firstName);
console.log(age);
console.log(isMarried);
console.log('My name is' + firstName + 'im ' + age + 'years old.' + isMarried);

/*
    Operator
    == jika membandingkan 2 variabel, maka tipe datanya akan ubah ke tipe data lain (loose )
    === akan diperiksa nilai dan tipe datanya (strict)
*/

//Meeting #4
/*
    Function
        sub program yg bia dipanggil
*/

//Function declaration
function penjumlahan(a, b){
    let total;
    total = a+b;

    return total;
}

//Function Expression
const penjumlahan = function(a, b){
    let total;
    total = a+b;

    return total;
}

/*parameter, variabel yang ditulis du dalam kurung pada saat function dibuat.
argumen, nilai yang dikirimkan 

parameter>argumen=sisanya undifined;
argumen>parameter=sisanya diabaikan
*/

/* Refactoring
    mengubah kode menjadi lebih 'baik' tanpa mengubah fungsionalitasnya

*/