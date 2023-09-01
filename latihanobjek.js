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

// membuat Object
let mhs = {
  nama: "Adhitya Hasan",
  umur: 20,
  ips: [3.0, 3.72, 3.89, 3.5, 3.77, 3.78],
  alamat: {
    jalan: "Jl. Abc kecap bango No. 69",
    kota: "Palembang",
    provinsi: "Sumatera Selatan",
  },
};

console.log(mhs.alamat["kota"]);
