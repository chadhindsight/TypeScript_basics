// return types determine what type is return from a function
function add(n1: number, n2: number) {
  return n1 + n2;
}
// if a function does not return any value then you can specify void as return type
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// Function types example
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
console.log(combinedValues(12, 4));
