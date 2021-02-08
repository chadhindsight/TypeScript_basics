// Object types are used in TS to determine that a piece of data is actually an object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // A tuple is a fixed length and fixed type array. This line explicity tells TS to expect a tuple
//   role: [number, string];
// } = {
//   name: "Devin",
//   age: 29,
//   hobbies: ["Football", "Drawing"],
//   role: [2, "Author"],
// };

// Enum lets you set identifiers which you want to represent as human readable values!
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

let favHobbies: string[];
favHobbies = ["Reading", "Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
