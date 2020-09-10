// Conditional

//1. If else
let cekAngka = 1;

if (cekAngka==0){
    console.log('angka Netral');
}else if(cekAngka%2==0){
    console.log('angka genap');
}else{
    console.log('angka ganjil');
}

//2. Switch Case

let keterangan;
let hari = 'selasa';

switch(hari){
    case 'senin':
    case 'rabu':
        keterangan='Banyak lowong';
        break;
    case 'selasa':
    case 'kamis':
        keterangan='Jadwal padat';
        break;
    case 'jumat':
        keterangan='no class';
        break;
    case 'sabtu':
        keterangan='Ibadah sabat';
        break;
    case 'minggu':
        keterangan='libur';
        break
}

console.log(keterangan);

//loop

// 1. for

for(i=1;i<=10;i++){
    console.log(i);
}

//2. for/in
//untuk objek

const gitar={
    merek: 'yamaha',
    tipe:'apx500ii'
}

for (x in gitar){
    console.log(x,' ',gitar[x]);
}

//3. for/of
//untuk array/string
const angkaa=[35,12,76,59]
for (setiap of angkaa){
    console.log(setiap);
}

//4. while

let e=1;

while(e<=3){
    console.log(e);
    e++;
}

//5. do while

let b=100;

do{
    console.log(b);
    b+=10;
}while(b<=140)