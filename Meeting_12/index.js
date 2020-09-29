const years=[1990,1992,2001,2005];

const calcAge5 = years.map(function(el){
    return 2020-el;
})

//Implicit return value
const calcAge6 = years.map((el) => 2020 - el);

console.log(calcAge5);
console.log(calcAge6);

//Default Value
const calcAge = (birthYear, currentYear = 2020) => currentYear-birthYear;
console.log(calcAge(1991));