// Rest & Spread Operator
//==============================
// Rest Parameter
// Parameter yang mewakili nilai dari semua nilai, atau sisa argumen yang diberikan pada sebuah fungsi
// 

const hitung = (a,b,c) => {
    return a + b + c;
}

console.log(hitung(1,2,3));

//rest operator akan tampung semua/sisa nilai yang dikirim oleh argumen
const hitung2 = (...angka) => {
    let total=0
    angka.forEach((el)=>{
        total=total+el;
    });
    return total;
}

console.log(hitung2(2,3,4,5,6,7,8));

//spread operator
//==============================
const cth = [1,2,3]
console.log(cth);
console.log(...cth);

// duplikasi referensi
arr1 = [1,2,3,4,5];
arr2=arr1;

arr1[0]=10;
console.log(arr2);

// duplikasi array
arr3 = [5,4,3,2,1];
arr4 = [...arr3];
console.log(arr4);

//Menggabungkan array
let gabung5 = arr1.concat(arr3);
console.log(gabung5);

let gabung6 = [...arr1, ...arr2, ...arr3];
console.log(gabung6)

// objek

let orang = {
    nama: "charley",
    umur: 20,
};

//ES5
// orang.pekerjaan = "Mahasiswa";
// orang.pendidikan = "SMK";

//ES6
orang = {...orang, pekerjaan: "Mahasiswa", pendidikan: "SMK"}
console.log(orang);