// Union Types
function combine(input1: number | string, input2: number | string) {
  let result;
  // Typecript can have runtime type checks too
  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else {
    input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(32, 23);
console.log(combinedAges);

const combinedNames = combine("Nicolle", "Brittany");
console.log(combinedAges);
