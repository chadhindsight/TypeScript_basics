// This is an example of using type aliases that you can reference elsewhere in your code
type Combinable = number | string;
type Descriptor = "as number" | "as text";

// Example of a Union Types
function combine(
  input1: Combinable,
  input2: Combinable,
  // You can combine union type and literal type
  resultType: Descriptor
) {
  let result;

  // Typecript can have runtime type checks too
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as number"
  )
    result = +input1 + +input2;
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(32, 23, "as number");
console.log(combinedAges);

const combinedNames = combine("Nicolle", "Brittany", "as text");
console.log(combinedAges);

// Type aliases can be used to "create" your own types.You're not limited to storing union types though
// You can also provide an alias to a (possibly complex) object type. For example:

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
