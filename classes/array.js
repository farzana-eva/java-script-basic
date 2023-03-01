// Spread function
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: "Farzana",
};

const newPerson = {
  ...person,
  age: 37,
};
console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
