// Function Signature

// Example 1
let greet: (name: string) => void;

greet = (name: string) => {
  console.log(`My name is ${name}`);
};
greet("John");

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
calc(5, 10, "add");
