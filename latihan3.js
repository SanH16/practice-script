// +++++++++++++++++++++++ Array +++++++++++++++++++++++
// let animal = ["cow", "cat", "rabbit", "koala", "bear"];
// console.log(animal);

// const newFunc = () => {
//   console.log("Tes Arrow Function");
// };

// const myFunc = function () {
//   console.log("Hello San");
// };
// let arr = ["San", 2, true, myFunc, [4, 5, 6, ["san"]]];

// console.log(arr[4][3]);
// console.log(arr[4][3][0]);

// +++++++++++++++++++++++ Manipulation Array +++++++++++++++++++++++

// Menambah isi array
// let arr = [];
// arr[0] = "San";
// arr[1] = "Tech";
// arr[2] = "Twenty Company";

// console.log(arr);

// Menghapus isi array
// let arrField = ["San", "Tech", 20, "Unicorn"];

// arrField[2] = undefined; //menggunakan cara manual
// console.log(arrField);

// Menampilkan semua isi array | tanpa didalam object (semuanya)
// let arrField = ["San", "Tech", 20, "Unicorn"];
// for (let i = 0; i < arrField.length; i++) {
//   console.log(`Nama Mahasiswa ke ${i + 1} : ${arrField[i]}`);
// }

// Method pada Array
let arrField = ["San", "Tech", 20, "Unicorn"];

// 1. Join
// console.log(arrField.join(", "));

// 2.Push | Memasukkan item ke akhir array
// arrField.push("Hello", "Santech");

// 3. Pop | Menghapus element terakhir dari sebuah Array
// arrField.pop();

// 4. Unshift | Menambahkan element baru di awal Array
// arrField.unshift("awal");

// 5. Shift | Menghapus element pertama di awal Array
// arrField.shift();

// 6. Slice (Mengiris (mengambil sebagian) Array menjadi array baru)
// slice(indexAwal, indexAkhir( indexAkhir tidak terbawa));
// // let arrField = ["San", "Tech", 20, "Unicorn"];
// let arrField2 = arrField.slice(1, 3);

// 7. Splice (Menyambung / Menambah / Menyisipkan di tengah-tengah Array)
// splice(indexAwal, mauDihapusBerapa (optional), elementBaru1, elementBaru2, ... dst)

// arrField.splice(2, 0, "Nyempil", "Nyempil 2");

// console.log(arrField.join(", "));
// console.log(arrField2.join(", "));

// ===================================================================================

// 8. foreach
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ["Adhitya", "Hasan", "Jamal", "Son"];
let hobi = ["Ngoding", "Ngulik", "Turu", "Bola"];

// contoh jika menggunakan for
// for (let i = 0; i < angka.length; i++) {
//   console.log(`looping angka ke - ${angka[i]}`);
// }

// contoh 1 : jika menggunakan foreach menggunakan arrow function
// angka.forEach((e) => {
//   console.log(`looping angka ke - ${e}`);
// });

// contoh 2 : menggabungkan 2 parameter
// nama.forEach((e, i) => {
//   console.log(`Mahasiswa ke - ${i + 1} adalah : ${e} | hobi : ${hobi[i]}`);
// });

// 9. Map | perulangan dengan memanipulasi isi array
let angka2 = angka.map((e) => {
  return e * 2;
});
console.log(`looping angka *2 = ${angka2.join(", ")}`);

// 10. Sort
let angkaSort = [1, 2, 100, 3, 4, 20, 7, 5, 6, 9]; // array sort
angkaSort.sort((a, b) => {
  return a - b;
});
console.log(`urutan angka dengan sort : ${angkaSort.join(", ")}`);

// 11. Filter | Mencari element dari suatu array (bisa mengembalikan banyak nilai/value)
let angkaFilter = [1, 2, 100, 3, 4, 20, 7, 5, 6, 9];
let angkaFilter2 = angkaFilter.filter((z) => {
  //   return z == 5; // cari nilai 5
  return z > 5; // cari nilai lebih dri 5
});

// 12. Find | Mencari element dari suatu array (hanya mengembalikan satu nilai/value)
let angkaFind = angka.find((f) => {
  //   return f == 2; // cari nilai 2
  return f > 5; // output = nilai pertama yang ketemu ( hanya 1 nilai)
});
console.log(`Angka yang dicari ${angkaFilter2} dan find : ${angkaFind}`);
