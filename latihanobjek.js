// let mahasiswa = {
//   nama: "Adhitya Hasan",
//   lulus: true,
//   IPSemester: [3.72, 3.5, 3.67, 3.82, 3.77, 3.76],
//   IPKumulatif: () => {
//     let total = 0;
//     let ips = this.IPSemester;
//     for (let i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
// };
// mahasiswa.IPKumulatif();

// contoh membuat Object
// let mhs = {
//   nama: "Adhitya Hasan",
//   umur: 20,
//   ips: [3.0, 3.72, 3.89, 3.5, 3.77, 3.78],
//   alamat: {
//     jalan: "Jl. Abc kecap bango No. 69",
//     kota: "Palembang",
//     provinsi: "Sumatera Selatan",
//   },
// };

// console.log(mhs.alamat["kota"]);

// ====================================================================
// membuat Object Literal
// let mhs1 = {
//   nama: "Adhitya Hasan",
//   npm: "2024240088",
//   email: "adhityahasan011@gmail.com",
//   jurusan: "Sistem Informasi",
// };

// let mhs2 = {
//   nama: "Ferguso",
//   npm: "2024240069",
//   email: "ferguso69@gmail.com",
//   jurusan: "AI Mastering",
// };

// // Membuat object dengan function
// const buatObject = (nama, npm, email, jurusan) => {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.npm = npm;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// };
// let mhs3 = buatObject(
//   "Zuck",
//   "20242400",
//   "zucklovelon@gmail.com",
//   "Informatic Robot"
// );
// let mhs4 = buatObject(
//   "Elon Musk",
//   "20242499",
//   "elonlovezuk@gmail.com",
//   "Petani"
// );

// // Membuat object dengan Constructor | function khusus membuat object
// function Mahasiswa(nama, npm, email, jurusan) {
//   // let this {}
//   this.nama = nama;
//   this.npm = npm;
//   this.email = email;
//   this.jurusan = jurusan;
//   // return this;
// }

// let mhs5 = new Mahasiswa(
//   "Jeff Bezos",
//   "20242401",
//   "jefhatezuckelon@gmail.com",
//   "Fashion balita"
// );

// console.log(mhs5);

// ++++++++++++++++++++++++ Object THIS ++++++++++++++++++++++++

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log(halo);
// }
// this.halo();
// dengan function declaration : this mengembalikan object GLobal

// Cara 2 - Object Literal
let obj = { a: 10, nama: "San" };
obj.halo = () => {
  console.log(this);
  console.log("halo");
};
obj.halo();
// dengan Object Literal : this mengembalikan Object yang bersangkutan

// Cara 3 - Constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
new Halo();
// dengan Cosntructor : this mengembalikan Object yang baru dibuat
