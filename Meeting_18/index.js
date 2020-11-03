//ASYNCHRONOUS

//Synchronous adalah eksekusi program baris per baris. baris selanjutnya tidak dapat dieksekusi jika baris sebelumnya belum selesai. disebut juga BLOCKING

//Asynchronous adalah kebalikan dari synchronous dimana baris selanjutnya tetap akan dijalankan tanpa harus menunggu baris sebelumnya. jika proses async sudah selesai, maka hasilnya akan dikembalikan melalui callback. disebut non-blocking. 

//Callback adalah mekanisme untuk memanggil kembali kode dari program javascript dari proses async. dibuat dalam bentuk fungsi. fungsi itu akan dieksekusi saat proses async selesai.

//contoh fungsi async adalah setTimeout. menerima dua parameter yaitu callback function dan waktu dalam milidetik.

// setTimeout(
// Disini untuk callback function
// ()=>{
// 
// },
// Disini untuk waktu yang dibutuhkan
// )

const second = () => {
    const num = 10;
    setTimeout(()=>{
        console.log("Second");
        console.log("num");
    }, 2000, num)
    //parameter ke tiga (num) untuk memasukan nilai dari luar ke dalam fungsi setTimeout
}

const first = () => {
    console.log("First");
    second();
    console.log("The End");
}

first();

//Masalah pada setTimeout yaitu callback hell. membuat program sangat sulit dibaca.

//PROMISE, nilainya belum diketahui. berupa object
//state : pending,   fulfilled, rejected
//result: undefined, value,     eror

//resolve adalah fungsi yang akan dipanggil jika sukses, reject dipanggil ketika reject atau data salah, koneksi masalah, dll.
// const promise = new promise(function (resolve, rejected) {
//     if(success){
//         resolve(value)
//     }else{
//         reject (error)
//     }
// })

const getData = new Promise((resolve, reject) => {
    const error = false;
    if (error) {
        //ini akan memanggil fungsi dengan method catch dibawah, dikirimkan nilai string yaitu Error!!!
        reject('Error!!!');
    }else{
        //ini akan memanggil fungsi dengan method then dibawah, dikirimkan nilai string yaitu Success!!!
        resolve("Success!!!");
    }
})

//cara panggil menggunakan 2 method, then dan catch.
//then ketika resolve
//catch ketika reject
getData
    .then((terimaNilaidaripemanggilanresolve)=> console.log(terimaNilaidaripemanggilanresolve))
    .catch((terimaNilaidaripemanggilanreject)=> console.log(terimaNilaidaripemanggilanreject))

//Contoh chaining
const getDataChaining = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const error=false;
            if (error) {
                reject("Error!!!");
            }else {
                resolve(10);
            }
        }, 2000)
    })
}

const getNameChaining = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${id} Success`)
        }, 2000)
    })
}

// getDataChaining()
//     .then(terimanilai10 => getNameChaining(terimanilai10)
//     .then(terimadarithensebelumnya => console.log(terimadarithensebelumnya)))
//     .catch(error => console.log(error))

//ASYNC AWAIT
// bentuk dasar: async function getNameById { }
const getNameById = async () => {
    try{
        const id = await getDataChaining();
        //await akan menunggu sampai fungsinya jalan lalu dilanjutkan ke baris yang dibawahnya. sama seperti proses syncronous
        const sukses = await getNameChaining(id);
        console.log(sukses);
    }catch(terimaNilaiDariReject){
        console.log(terimaNilaiDariReject);
    }
}

// jika ada nilai return pada async await, pemanggilannya dalam bentuk method then karena yang diproses adalah fungsi asyncronous
//misalnya:
//getNameById().then(result => console.log(result));