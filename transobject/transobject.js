// Make an Transportation with Object

// Contructor func
function Transportation(sopir, ways, passenger, cash) {
  this.sopir = sopir;
  this.ways = ways;
  this.passenger = passenger;
  this.cash = cash;

  this.passengerGoUp = (namePassenger) => {
    this.passenger.push(namePassenger);
    return this.passenger;
  };

  this.passengerGoDown = (namePassenger, paid) => {
    if (this.passenger.length === 0) {
      alert("Trans is empty.");
      return false;
    }

    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i] == namePassenger) {
        this.passenger[i] = undefined;
        this.cash += paid;
        return this.passenger;
      }
    }
  };
}

const trans1 = new Transportation(
  "San",
  ["Palembang", "Papua"].join(" - "),
  [],
  0
);
const trans2 = new Transportation("Hulk", ["Bumi", "Bulan"], [], 0);
trans1.passengerGoUp(["Adhitya Hasan", "San Tech", "Jokowi"].join(", "));
// trans1.passengerGoDown("Jokowi", 2000);

document.getElementById("c1").textContent = `Sopir : ${trans1.sopir}`;
document.getElementById("c2").textContent = `Track : ${trans1.ways}`;
document.getElementById("c3").textContent = `Penumpang : ${trans1.passenger}`;
document.getElementById("c4").textContent = `Bayar : ${trans1.cash}`;

const deletion = document.getElementById("deletion");
const addion = document.getElementById("addion");
const formSearch = document.getElementById("formSearch");
formSearch.addEventListener("submit", (e) => {
  e.preventDefault;

  fGet();
});

const fGet = () => {
  trans1.passengerGoDown("Jokowi", 2000);
  alert("remove berhasil");
};

// addion.addEventListener("click", () => {
//   fTes;
// });
const fTes = () => {
  trans1.passengerGoUp("Uye");
  alert("add berhasil");
};
