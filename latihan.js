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
// alert("Selamat datang");
// let klik = true;

// while (klik === true) {
//   let nama = prompt("Masukkan nama :");
//   alert("Hai " + nama);

//   klik = confirm("Coba Lagi ?");
// }
// alert("Terima kasih");

// ======= Control Flow =======
// contoh perulangan for
// alert("Start");
// for (let i = 0; i < 3; i++) {
//   alert("Hello Santech"); //output Santech sebanyak 3x
// }
// alert("Done");

// contoh pengkodisian if
// let angka = prompt("Masukkan angka :");

// if (angka % 2 === 0) {
//   alert(angka + " Ini adalah bilangan Genap");
// } else {
//   alert(angka + " Ini adalah bilangan Ganjil");
// }

// ======= While =======
// contoh if di dalam while
// let klik = true;

// while (klik) {
//   let num = prompt("Input a number :");
//   if (num % 2 === 0) {
//     alert(num + " This is an Even number");
//   } else {
//     alert(num + " This is an Odd number");
//   }
//   klik = confirm("Try again ?");
// }
// alert("Thank You");

// atau menggunakan cara ini
// while (klik === true ) { isi sama dengan diatas} alert("Thanks")

// contoh sederhana
// let text = true;
// while (text) {
//   console.log("Hello SanTech");
//   text = confirm("Try Again ?");
// }

// contoh otomasi oleh program
// let nilai = 1;
// while (nilai <= 5) {
//   console.log("Hey " + nilai + "x"); //hey 5 kali
//   nilai++; //nilai = nilai + 1;
// }

// ======= Perulangan FOR =======
// contoh sederhana
for (let num = 1; num <= 10; num++) {
  console.log("Hey number " + num); //Hey number 1,2,....
}

// contoh 2
let carNumber = prompt("Input a number of Transport : ");

for (let car = 1; car <= carNumber; car++) {
  console.log("This is an number of Transport - (" + car + ")");
}
