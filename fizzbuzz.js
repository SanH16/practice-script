// ======= For If | Fizz Buzz =======

for (let i = 0; i <= 30; i++) {
  if (i % 15 == 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ======= While If | Fizz Buzz =======

// deklarasi angka dulu
let num = 1;

while (num <= 30) {
  if (num % 3 == 0) {
    console.log(`Fizz (${num})`);
  } else if (num % 5 == 0) {
    console.log(`Buzz (${num})`);
  } else if (num % 15 == 0) {
    console.log(`Fizz Buzz (${num})`);
  } else {
    console.log(num);
  }
  num++; // incerement : num = num + 1;
}

// ======= Ganjil genap =======

let angka = 10; // input berapapun, bisa pake prompt juga, console nya diganti alert
if (angka % 2 == 0) {
  console.log(`(${angka}) Angka ini adalah bilangan Genap`);
} else {
  console.log(`(${angka}) Angka ini adalah bilangan Ganjil`);
}

// contoh pake prompt

// let angka2 = prompt("Masukka angka yang ini dicari : ");
// if (angka2 % 2 == 0) {
//   alert(`(${angka2}) Angka ini adalah bilangan Genap`);
// } else {
//   alert(`(${angka2}) Angka ini adalah bilangan Ganjil`);
// }

// ======= Identifikasi String yang muncul berapa kali =======

// cara 1 😂
const inputString = "Contoh karakter yang mau dihitung";
console.log(inputString.length);

// cara 2 | pake function

const inputChar = "Contoh karakter yang mau dihitung"; // bebas apa aja

function denganParameter(e) {
  return e.length;
}
hitung = jumlahKarakter(inputChar);

function tanpaParameter() {
  counting = inputChar.length;
  return counting;
}

console.log(`Jumlah karakter dalam string tersebut adalah (Fungsi Parameter) : ${hitung}`);
console.log(`Jumlah karakter dalam string tersebut adalah (Fungsi !Parameter) : ${tanpaParameter()}`);
