// case 1
// let amountTransport = prompt("Input a number Transport :");
// let transport = 1;
// while (transport <= amountTransport) {
//   console.log("Kendaraan No. " + transport + " beroperasi dengan baik.");
//   transport++;
// }

// case 2 | while + for
// // let jumlahTransport = prompt("Input a number of Transport :");
// // let transportAktif = prompt("Input a number Operation Transport (Active) : ");
// let jumlahTransport = 10;
// let transportAktif = 6;
// let transport = 1;

// while (transport <= transportAktif) {
//   console.log("Kendaraan No. " + transport + " beroperasi dengan baik.");
//   transport++;
// }

// for (
//   transport = transportAktif + 1;
//   transport <= jumlahTransport;
//   transport++
// ) {
//   console.log("Kendaraan No. " + transport + " sedang tidak beroperasi.");
// }

// Case 3 | For + if
// let jumlah = prompt("Input a number of Transport :");
// let aktif = prompt("Input a number Operation Transport (Active) :");
// for (let num = 1; num <= jumlah; num++) {
//   if (num <= aktif) {
//     console.log("Kendaraan No. " + num + " beroperasi dengan baik.");
//   } else {
//     console.log("Kendaraan No. " + num + " sedang tidak beroperasi.");
//   }
// }

// Case 4 | For + if + else if
// let jumlah = parseInt(prompt("Input a number of Transport :"));
// let aktif = parseInt(prompt("Input a number Operation Transport (Active) :"));
// for (let num = 1; num <= jumlah; num++) {
//   if (num <= aktif) {
//     console.log("Kendaraan No. " + num + " beroperasi dengan baik.");
//   } else if (num === 8) {
//     console.log("Kendaraan No. " + num + " sedang lembur.");
//   } else {
//     console.log("Kendaraan No. " + num + " sedang tidak beroperasi.");
//   }
// }

// Case 5 | Kendaraan 8 & 10 Lembur
// let jumlah = parseInt(prompt("Input a number of Transport :"));
// let aktif = parseInt(prompt("Input a number Operation Transport (Active) :"));
// for (let num = 1; num <= jumlah; num++) {
//   if (num <= aktif) {
//     console.log("Kendaraan No. " + num + " beroperasi dengan baik.");
//   } else if (num === 8 || num === 10) {
//     console.log("Kendaraan No. " + num + " sedang lembur.");
//   } else {
//     console.log("Kendaraan No. " + num + " sedang tidak beroperasi.");
//   }
// }

// Case 6 | Kendaran 5, 8, 10 Lembur
let jumlah = parseInt(prompt("Input a number of Transport :"));
let aktif = parseInt(prompt("Input a number Operation Transport (Active) :"));
for (let num = 1; num <= jumlah; num++) {
  if (num <= aktif && num !== 5) {
    console.log("Kendaraan No. " + num + " beroperasi dengan baik.");
  } else if (num === 8 || num === 10 || num === 5) {
    console.log("Kendaraan No. " + num + " sedang lembur.");
  } else {
    console.log("Kendaraan No. " + num + " sedang tidak beroperasi.");
  }
}
