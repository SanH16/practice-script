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

// ======= While  | While didalam If =======
// contoh if di dalam while
// let klik = true;

// while (klik) {
//   let num = prompt("Input a number :");
//   if (num % 2 === 0) {
//     alert("(" + num + ") This is an Even number");
//   } else if (num % 2 === 1) {
//     alert("(" + num + ") This is an Odd number");
//   } else {
//     alert("(" + num + ") is not an Number");
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
// for (let num = 1; num <= 10; num++) {
//   console.log("Hey number " + num); //Hey number 1,2,....
// }

// // contoh 2
// let carNumber = prompt("Input a number of Transport : ");

// for (let car = 1; car <= carNumber; car++) {
//   console.log("This is an number of Transport - (" + car + ")");
// }

// ======= Pengkondisian IF =======
// contoh sederhana
// let num = 5;
// if (num === 5) {
//   console.log("An number input is 5");
// }

// contoh 2
// let num = parseInt(prompt("Masukkan angka : "));
// if (num < 10) {
//   console.log(num + " lebih kecil dari 10");
// }

//contoh 3 | Ganjil Genap
// let num = prompt("Input a number :");
// if (num % 2 === 0) {
//   console.log("(" + num + ") This is an Even number");
// } else if (num % 2 === 1) {
//   console.log("(" + num + ") This is an Odd number");
// } else {
//   console.log("(" + num + ") is not an Number");
// }

// ======= Switch =======

// contoh 1
// let numb = parseInt(prompt("Masukkan number : "));

// switch (numb) {
//   case 1:
//     alert("Anda memasukkan number 1");
//     break;
//   case 2:
//     alert("Anda memasukkan angka 2");
//     break;
//   case 3:
//     alert("Anda memasukkan angka 2");
//     break;
//   default:
//     alert("Anda tidak memasukkan angka");
//     break;
// }

// contoh 2 | banyak kasus / output
// let item = prompt(
//   "Masukkan makanan / minuman : \n (nasi, daging, susu, fanta, burger, softdrink)"
// );

// switch (item) {
//   case "nasi":
//     alert("Makanan / minuman ini cukup Sehat 😊");
//     break;
//   case "daging":
//     alert("Makanan / minuman ini Sehat 😊");
//     break;
//   case "susu":
//     alert("Makanan / minuman ini Konsumsi tinggi 😊");
//     break;
//   case "fanta":
//     alert("Makanan / minuman ini kurang Sehat 😐");
//     break;
//   case "burger":
//     alert("Makanan / minuman ini kurang Sehat 😐");
//     break;
//   case "softdrink":
//     alert("Makanan / minuman ini kurang Sehat 😐");
//     break;
//   default:
//     alert("Anda memasukkan makanan / minuman yang tidak sesuai.");
// }

//contoh 3 | 2 output
// let item = prompt(
//   "Masukkan nama Makanan / Minuman \n (cth: nasi, susu, daging, burger, pizza, fanta)"
// );

// switch (item) {
//   case "nasi":
//   case "susu":
//   case "daging":
//     alert("Makanan / minuman ini SEHAT 😊");
//     break;
//   case "burger":
//   case "pizza":
//   case "fanta":
//     alert("Makanan / minuman ini TIDAK SEHAT");
//     break;
//   default:
//     alert("Inputan anda SALAH!");
//     break;
// }

// ============== FOR Bercabang =======
// contoh 1 | bintang segitiga kebawah
// let c = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     c += "*"; // tampil bintang + satu bintang (baru)
//   }
//   c += "\n"; //spasi ke bawah setiap perulangan bintang terpenuhi
// }
// console.log(c);

// contoh 2 | bintang segitiga keatas
// let c = "";
// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     c += "*";
//   }
//   c += "\n";
// }
// console.log(c);
