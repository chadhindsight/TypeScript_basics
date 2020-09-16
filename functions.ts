// return types determine what type is returned from a function
function add(n1: number, n2: number) {
  return n1 + n2;
}
// if a function does not return any value then you can specify void as return type
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
printResult(add(5, 12));

// Function types are types that describe a function
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
console.log(combinedValues(12, 4));

addAndHandle(10, 15, (num) => {
  console.log(num);
});
