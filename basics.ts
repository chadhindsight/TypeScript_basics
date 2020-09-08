// Do 'tsc filename.ts' in your terminal to compile your typescript down to javascript

// Typescript allows you to assign types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // Typecript has the same types as JS but also has some additional ones.
  // Typscript is statically typed(during development) and JS is dynamically typed(resolves at runtime)
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

  return;
}

let number1 = 28;
let number2 = 5;
add(number1, number2, true, "I love typesript!");
// NB: The core primitive types in TypeScript are all lowercase!
