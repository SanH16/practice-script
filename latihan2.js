// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

// ++++++++++++++++++ Function ++++++++++++++++++
// function jumlahVolumeDuaKubus(a, b) {
//   let volumeA;
//   let volumeB;
//   let total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }
// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 15));

// ++++++++++++++++++ Parameter dan Argument ++++++++++++++++++

// // function 1
// function tambah(a, b) {
//   return a + b;
// }

// // function 2
// function kali(a, b) {
//   return a * b;
// }

// // let a = parseInt(prompt("masukkan nilai 1 : "));
// // let b = parseInt(prompt("masukkan nilai 2 : "));
// // let hasil = tambah(a, b);

// // let hasil = kali(3, 4);
// let hasil = kali(tambah(1, 2), tambah(3, 4));

// // output
// console.log(hasil);

// ++++++++++++++++++ funtion array arguments ++++++++++++++++++
// function tambah() {
//   let hasil = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     hasil += arguments[i]; //statement hasil
//   }
//   return hasil;
// }
// // let coba = tambah(5, 10, "san", false);
// let coba = tambah(5, 10, 100);
// console.log(coba);

// ++++++++++++++++++ Refactoring Code ++++++++++++++++++

// contoh refactoring menghitung 2 volume kubus
// function jumlahVolumeDuaKubus(a, b) {
//   return a * a * a + b * b * b;
// }
// alert(jumlahVolumeDuaKubus(8, 3));

// ++++++++++++++++++ Scope ++++++++++++++++++

// contoh function scope 1
// let a = 5; //global scope

// function tes() {
//   //di dalam function bisa akses variable dari global
//   let b = 2;
//   console.log(b); // benar
//   console.log(a); // masih benar
// }
// tes();
// // console.log(b); // error karena variable dalam function tidak bisa diakses dari luar (tidak diakses secara global)

// // contoh function scope 2
// let a = 1;
// function tes() {
//   // name conflict
//   let a = 5; // variable lokal
// }
// console.log(a); // a=1 karena yang tampil adalah variable global

// contoh function scope 3
let a = 1;
function tes(a) {
  console.log(a);
}
tes(2); // output : 2 | parameter 2 akan masuk ke variable local function tes(a) kemudian menampilkan console dari (a)
console.log(a); // output : 1 | menampilkan isi dari variable global a = 1
