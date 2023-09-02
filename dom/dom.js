// DOM Selection
// getElementById()
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#444";
judul.textContent = "Adhitya Hasan";

// getElementByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.textAlign = "center";

// getElementByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.textContent = "Eyowezup from js";
