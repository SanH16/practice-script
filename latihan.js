// alert("Hello Wezup!");

// ======= opeator comparison/perbandingan =======
// contoh sederhana
// console.log("Adhitya Hasan" === "Adhitya Hasan"); //true

// contoh bil genap
// let x = 5;

// if (x % 2 == 0 && x <= 10) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// ======= operator penggabungan string =======
// let a = "apple";
// let b = "pen";
// console.log(a + " " + b);

// ======= penjumlahan number dengan string =======
// console.log(10 + 10 + "100"); //20100 (number + number + string = number & string)
// console.log("10" + 10 + 10); //101010 (string + number + number = string)

// ======= typeof | cek tipe data =======
// console.log(typeof 10);
// console.log(typeof "10");
// console.log(typeof true);

// ======= operator ternary =======
// (kondisi) ? "benar" : "salah"
// (x % 2 == 0) ? "genap" : "ganjil"

// ======= penggunaan kutip string =======
// console.log('"Gerakan Mahasiswa" dilakukan pada hari Senin'); //masih benar
//  // console.log('"Gerakan Mahasiswa" dilakukan pada hari jum'at '); //tidak jalan error
// console.log('"Gerakan Mahasiswa" dilakukan pada hari jum\'at '); //tambahkan backslash sebelum kutip | true
// console.log("satu \n backslash n");
// console.log("dua \n\n dua backslash n");
// console.log("coba backslash \t tab");

// ======= unicode =======
// console.log("\u00A9"); //copyright
// console.log("\u00AE"); //icon R
// console.log("\u00B1"); //icon lebih kurang
// console.log("\u00B5"); //icon u
// console.log("\u2122"); //icon t mark

// ======= length =======
// let firstName = "Adhitya Hasan";
// console.log(firstName.length); // 13 karakter | .length start hitung dari angka 1,2,3,4... bukan dari 0,1,2,3...

// ======= contoh boolean =======
// var x = 10;
// console.log(x < 20); //true

// console.log("Adhityasan" == "adhityasan"); //false
// let x; //undefined
// let y = "null"; //null

// console.log(x);
// console.log(y);

// ======= shorthand deklarasi & assignment =======
// let nama = "Adhitya Hasan",
//   umur = 20,
//   lulus = true;

// console.log(`nama saya ${nama}, umur ${umur}, lulus ${lulus}`);

// ======= alert prompt confirm =======
// alert("Hai Santech");

// let umur = prompt("Masukkan umur : ");
// alert("Umur anda " + umur);

// let tes = confirm("Kamu yakin ??");
// // alert(tes);
// if (tes === true) {
//   alert("User menekan OK!");
// } else {
//   alert("User menekan Cancel :(");
// }

// contoh sederhana
alert("Selamat datang");
let klik = true;

while (klik === true) {
  let nama = prompt("Masukkan nama :");
  alert("Hai " + nama);

  klik = confirm("Coba Lagi ?");
}
alert("Terima kasih");
