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
