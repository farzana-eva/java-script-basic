let myName = "Farzana";
console.log(myName);

myName = "Eva";
console.log(myName);
// Normal function
//function printMyName(name) {
// console.log(name);
//}
//printMyName("Farzana Eva");

// Arrow function
const printMyName = (name) => {
  console.log(name);
};
printMyName("Maria Islam");

const multiply = (number) => number * 2;
console.log(multiply(4));
