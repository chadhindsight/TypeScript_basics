// Interface describes the structure of an object. Not a blueprint, but a custom type
// interface Person {
//     name: string,
//     age: number

//    greet(phrase: string): void 
// }

// // The user1 variable will be based on the Person interface
// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 35,
//     greet(phrase:string) {
//         console.log(phrase + '' + this.name)
//     }
// }

///// INTERFACES WITH CLASSES /////
// A diff between a custom type and an interface is that interface is only used to describe object structure, & custom can be used for other stuff
// NB: You can implment multiple interfaces.

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  //Mark outputName property as optional. Objects based on Named interface may or may not have outputName
  outputName?: string
}
// You can also impelment inretitance in interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!')
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);