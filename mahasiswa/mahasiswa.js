// Construct
function Mahasiswa(nama, npm, jurusan, hobi) {
  this.nama = nama;
  this.npm = npm;
  this.jurusan = jurusan;
  this.hobi = hobi;
}
const mhs1 = new Mahasiswa("Adhitya Hasan", "2024240088", "SI", "Ngoding");

//Menampilkan isi
document.getElementById("namaMhs").textContent = `Name : ${mhs1.nama}`;
document.getElementById("npmMhs").textContent = `NPM : ${mhs1.npm}`;
document.getElementById("jurusanMhs").textContent = `Jurusan : ${mhs1.jurusan}`;
document.getElementById("hobiMhs").textContent = `Hobby : ${mhs1.hobi}`;

// Mahasiswa.prototype.addData = (name, enpm, way, hoby) => {
//   this.nama[i] = name;
//   this.npm[i] = enpm;
//   this.jurusan[i] = way;
//   this.hobi[i] = hoby;
// };

// const mhs1 = new Mahasiswa("name", "npm", "jurusan", "hobi");
// console.log(mhs1);
// mhs1.addData("Adhitya Hasan", "2024240088", "SI", "Zup");
// console.log(mhs1);

// const mahasiswa1 = new Mahasiswa(
//   "John Doe",
//   "1234567890",
//   "Teknik Informatika",
//   "Bermain Game"
// );
// console.log("Data Mahasiswa Awal:");
// console.log(mahasiswa1);

// mahasiswa1.addData("Jane Smith", "0987654321", "Manajemen", "Membaca Buku");
// console.log("\nData Mahasiswa Setelah Ditambahkan:");
// console.log(mahasiswa1);
