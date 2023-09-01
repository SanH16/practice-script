// let passenger = ["Adhitya", undefined, "Hasan"];
let passenger = [];

let addPassenger = (namePassenger, passenger) => {
  if (passenger.length == 0) {
    // add passenger
    passenger.push(namePassenger);
    // return value
    return passenger;
  } else {
    // search all seat
    for (let i = 0; i < passenger.length; i++) {
      // if has a empty seat
      if (passenger[i] == undefined) {
        // add passenger on the seat
        passenger[i] = namePassenger;
        return passenger;
      }
      // if already has a name filled in
      else if (passenger[i] == namePassenger) {
        // output error
        console.log(`${namePassenger} is already on the seat.`);
      }
      // if already seat full
      else if (i == passenger.length - 1) {
        // add passenger on the last array
        passenger.push(namePassenger);
        return passenger;
      }
    }
  }
};

let deletePassenger = (namePassenger, passenger) => {
  if (passenger.length == 0) {
    console.log("Car Transport is empty.");
  } else {
    for (let i = 0; i < passenger.length; i++) {
      if (passenger[i] == namePassenger) {
        passenger[i] = undefined;
      } else if (i == passenger.length - 1) {
        console.log(`${namePassenger} is not in the car transport`);
      }
    }
  }
  return passenger;
};
