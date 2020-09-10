//Object literal menggunakan kurung kurawal

const mahasiswa1 = ['John', 'Doe', 31, true];

const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true
}

//menggunakan new
const mhs2 = new Object();
mhs2.namaDepan = 'Jane';

//Pemanggilan
console.log(mhs1.umur);
console.log(mhs1['namaBelakang']);

//menghapus properti menggunakan delete
delete mhs1.umur;