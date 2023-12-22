function create() {
  const value = 1 + 1;

  return value;
}

const creates = () => {
  const value = 1 + 1;

  return value;
};

console.log("Call function", creates());

// callback function

function user(name, greeting, callback) {
  return callback(name, greeting);
}

const result = user("San", "Hai", function (name, greeting) {
  return greeting + " " + name;
});

console.log(result);
