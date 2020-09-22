// Var, Let, Const
//Scope
// 1. function Scope (var)
// 2. block scope (let, const)

var nama='charley';
var nama='rantung';

console.log(nama);

// IIFE= setelah dideklarasi, lgsg dipanggil otomatis
(function(){
    // statements
})();

// 2. Template Literal
const person = {
    fName: 'charley',
    lName: 'rantung',
    age: 20,
};

console.log(`Hallo nama saya ${person.fName} ${person.lName}. Umur saya ${person.age} tahun`)