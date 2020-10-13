import {numbers, hello} from './hello.js'

console.log(numbers);

hello(numbers);
//Sebelum membuat component, ada perubahan sedikit yang harus dilakukan pada file index.html
//yaitu menambahkan type="module" pada script


//Jika ingin mengimport semua fungsi dalam component, menggunakan bintang dan as
import * as fungsi from './hello.js'

fungsi.hello(fungsi.numbers);

//Untuk import default. cuma ada satu fungsi didalam komponen
import fungsi2 from './components/hello2.js';
fungsi2();