// 1. Buatlah object dengan nama account dengan 2 properti, yaitu:
//    name bertipe data String
//    expenses bertipe data array
const account = {
    name: "Charley",
    expenses: []
};

// 2. Buatlah function dengan nama addExpenses() dimana function tersebut menerima 2 argument yaitu description dan amount.
//    Masukan kedua argument tersebut ke dalam object dan dengan  menggunakan method push(), 
//    tambahkan object tersebut ke dalam properti expenses pada object account yang dibuat di nomor 1
const addExpenses = function(description, amount){
    account.expenses.push({deskripsi: description, jumlah: amount});
    console.log(account.expenses[account.expenses.length-1].deskripsi +': '+ account.expenses[account.expenses.length-1].jumlah);
}

// 3. Buatlah function dengan nama getAccountSummary(). Function ini tidak memiliki argument. 
//    Dengan menggunakan forEach hitung totalExpense pada properti expenses, dengan menjumlahkan semua amount pada object yg dibuat di nomor 2. 
//    Tampilkan menggunakan console log dengan tampilan sebagai berikut 'Total pengeluaran <name> adalah Rp.<total expenses>'.
var totalExpense= 0;
const getAccountSummary = function(){
    account.expenses.forEach(function(element){
        totalExpense=totalExpense+element.jumlah;
    });
    console.log('Total Pengeluaran '+ account.name + ' adalah Rp.' + totalExpense);
}

// 4. Panggil fungsi addExpenses dan getAccountSummary.
//      Contohnya:
//      addExpenses('Beli Makanan', 15000);
//      addExpenses('Ongkos', 30000)
//      getAccountSummary(); //Output: Total pengeluaran John adalah Rp. 45000
addExpenses('Permen', 20000);
addExpenses('Makan Siang', 25000);
getAccountSummary();