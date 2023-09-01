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

let trans1 = new Transportation("San", ["Palembang", "Papua"], [], 0);
let trans2 = new Transportation("Hulk", ["Bumi", "Bulan"], [], 0);
