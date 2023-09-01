const motorcycles = new Map();

motorcycles.set("yamaha", ["mio", "r15", "nmax"]);
motorcycles.set("honda", ["vario", "scoopy", "pcx"]);

const yamaha = motorcycles.get("yamaha");
console.log(yamaha);

// motorcycles.has("honda");
