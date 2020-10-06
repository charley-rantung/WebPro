// Destrukturisasi
// Membongkar isi dari array

let buah = ['mangga','pisang','anggur'];

let [buah1, buah2, buah3] = buah;
//buah 1,2 dan 3 akan menyimpan isi dari setiap array.

console.log(buah1,buah2,buah3);

let buuku = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];
let [namaDepan, , namaBelakang, , buku] = buuku;
//Dapat memilih elemen mana yang tidak mau disimpan dengan cara menggunakan "koma kosong"
console.log(namaDepan);
console.log(namaBelakang);
console.log(buku);

// MENUKAR NILAI DUA VARIABEL LEBIH CEPAT
// ======================================

let a = 10;
let b = 15;

let temp = a;
//temp adalah variabel tambahan, karena tidak dapat menukar hanya dengan dua variabel
a = b; // nilai a sekarang adalah 15
b = temp; // nilai b sekarang adalah 10

//ini cara yang lebih mudah
[a,b] = [b,a];

//Membongkar isi dari objek

//cara biasa
let orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama5 = orang.nama;
  let umur5 = orang.umur;
  let sudahMenikah5 = orang.sudahMenikah;

// versi ES6
//syarat: nama variabel destrukturisasi harus sama dengan nama properti dari obje yang dimaksud.
let { nama, umur, sudahMenikah } = orang;
console.log(sudahMenikah);

//jika ingin nama berbeda, nama variabelnya kita tambah simbol "titik dua" dan dilanjutkan dengan nama variabel yang kita mau
let orang = {
    name: "Joko",
    age: 22,
  };

 let { name: nama, age: umur } = orang;
  
console.log(nama);
console.log(umur);

//Destrukturisasi Objek Bertingkat
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga); // Output: juara 1

//   Kalau kalian cermati, nilai "juara 1" adalah nilai dari properti "olahraga", yang mana adalah properti dari objek prestasi. Maka saat melakukan destrukturisasi, kita juga harus mengikuti struktur objek tersebut.