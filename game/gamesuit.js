let asking = true;
while (asking) {
  // get user choice
  let p = prompt("Pilih : jempol, telunjuk, kelingking");

  // get computer choice (generate random num)
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "jempol";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "telunjuk";
  } else {
    comp = "kelingking";
  }
  console.log(comp);

  // rules game
  let hasil = ""; //inisiasi hasil dengan nilai kosong terlebih dahulu
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "jempol") {
    //   if (comp == "orang") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "telunjuk" ? "MENANG!🎉" : "KALAH!💀";
  } else if (p == "telunjuk") {
    hasil = comp == "semut" ? "MENANG!🎉" : "KALAH!💀";
  } else if (p == "kelingking") {
    hasil = comp == "jempol" ? "MENANG!🎉" : "KALAH💀";
  } else {
    hasil = "Anda memasukkan pilihan yang tidak sesuai";
  }

  // output
  alert(
    "Kamu🤠 memilih pilihan : (" +
      p +
      ")\nComputer🤖 : (" +
      comp +
      ")\n\nMaka hasilnya (🤠Kamu VS Computer🤖) :\n  " +
      hasil
  );

  asking = confirm("Ingin bermain lagi ?");
}
alert("Thank You for playing a game !✨");
