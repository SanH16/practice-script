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
function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i]; //statement hasil
  }
  return hasil;
}
// let coba = tambah(5, 10, "san", false);
let coba = tambah(5, 10, 100);
console.log(coba);
