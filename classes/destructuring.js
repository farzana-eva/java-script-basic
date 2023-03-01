// Array Destructuring
[a, b] = ["Hello", "Farzana"];
console.log(a); //Hello
console.log(b); //Farzana

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// Object Destructuring

const { name, age } = { name: "Maria", age: 8 };
console.log(name);
console.log(age);
