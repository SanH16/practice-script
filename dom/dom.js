// DOM Selection

// getElementById()
// -> Mengembalikan 1 Element
const judul = document.getElementById("judul");
judul.style.color = "purple";
judul.style.backgroundColor = "pink";
judul.textContent = "Adhitya Hasan";
judul.setAttribute("name", "san");

// getElementByTagName()
// -> Mengembalikan HTMLCollection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

const h1 = document.getElementsByTagName("h1")[0];
h1.style.textAlign = "center";

// getElementByClassName()
// -> Mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.textContent = "Eyowezup from js";

// querySelector()
// -> Mengembalikan 1 Element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "20px";

const list2 = document.querySelector("section#b ul li:nth-child(2)");
list2.style.backgroundColor = "pink";

// querySelectorAll()
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue"; //quetySelectorAll harus menggunakan index
}

// mengubah node root
// ====================================================
const sectionB = document.getElementById("b");
const prgf4 = sectionB.querySelector("p");
prgf4.textContent = "ubah aja";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Heyowezup";

// =================== DOM Manipulation ===================
// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World"; //mengganti semua isi yang ada di section#a
const link = document.querySelector("section#a a");
link.setAttribute("id", "link");
link.getAttribute("href");
link.getAttribute("id");
// link.removeAttribute("href"); //remove attribute
