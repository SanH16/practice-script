// case 1
// let amountTransport = prompt("Input a number Transport :");
// let transport = 1;
// while (transport <= amountTransport) {
//   console.log("Kendaraan No. " + transport + " beroperasi dengan baik.");
//   transport++;
// }

// case 2
// let jumlahTransport = prompt("Input a number of Transport :");
// let transportAktif = prompt("Input a number Operation Transport (Active) : ");
let jumlahTransport = 10;
let transportAktif = 6;
let transport = 1;

while (transport <= transportAktif) {
  console.log("Kendaraan No. " + transport + " beroperasi dengan baik.");
  transport++;
}

for (
  transport = transportAktif + 1;
  transport <= jumlahTransport;
  transport++
) {
  console.log("Kendaraan No. " + transport + " sedang tidak beroperasi.");
}
