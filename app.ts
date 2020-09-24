//Much like any, any type of value is assignable to unknown; however, unlike any,
// you cannot access any properties on values with the type unknown, nor can you call/construct them.
let userInput: unknown;

userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
  let userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
