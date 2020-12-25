// Interface describes the structure of an object
// interface Person {
//     name: string,
//     age: number

//    greet(phrase: string): void 
// }
// // The user1 variable will be based on the Person interface
// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 29,
//     greet(phrase:string) {
//         console.log(phrase + '' + this.name)
//     }
// }

///// INTERFACES WITH CLASSES /////
//A diff between a custom type and an interface is that interface is only used to describe objects custom can be used to other stuff
// You can also implment inretitance in interfaces
interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}
// You can implement more than one interface, but you can only inherit from one class
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
// Greetable forces anything based on it to have a greet method
user1.greet('Hi there - I am');
console.log(user1);