const todos = [
  { id: 1, task: "HTML I", isCompleted: true },
  { id: 2, task: "CSS", isCompleted: true },
  { id: 3, task: "Responsive design", isCompleted: true },
  { id: 4, task: "Git", isCompleted: true },
  { id: 5, task: "JavaScript I", isCompleted: true },
  { id: 6, task: "JavaScript II", isCompleted: false },
];

// function constructor
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const student = new Student("Adhitya", "Hasan");
console.log(student.getFullName());

// function declaration | fungsi add todo
/**
 * @param {Object} todo Todo;
 * @param {string} todo.task;
 * @param {boolean} todo.isCompleted;
 * @returns {Array} todo[] todos
 */

function addTodo(todo) {
  if (!todo) throw new Error("todo should be used todo type");
  const todosLength = todos.length;
  const newTodo = { id: todosLength + 1, ...todo };
  return todos.push(newTodo);
}

// function update todo | function expression
/**
 * @param {number} id id of todo;
 * @returns {Array} todo[] todos
 */
// function expression
const updateTodo = function (id) {
  if (!id && isNaN(id)) return;
  todos.map((todo) => {
    if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    return todos;
  });
  return todos;
};

console.log({ todos });

addTodo({ task: "JS III", isCompleted: false });

console.log({ todos });

updateTodo(7);

console.log({ todos });

// arrow function
const deleteTodo = (id) => {
  //   if (!todo) throw new Error("todo should be used todo type");

  todos.splice(
    todos.findIndex((e) => e.id === id),
    1
  );
  return todos;
};

deleteTodo(5);
console.log({ todos });

// IIFE function | ubah status isCompleted
const allStatus = false;
// anonymous arrow function
((allStatus) => {
  todos.map((todo) => {
    const { isCompleted } = todo;
    todo.isCompleted = allStatus;
    return todo;
  });
})(allStatus);

console.log(todos);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function delete
// const deleteTodo = function (id) {
//   if (!id && isNaN(id)) return;
//   todos.filter((todo) => {
//     if (todo.id === id) todo.isCompleted = !todo.isCompleted;
//     return todos;
//   });
//   return todos;
// };
