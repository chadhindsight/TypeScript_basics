type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a:Combinable, b:Combinable) {
  //Typeguards help us to know which exact type we get and what to do with it
  if(typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString()
  }
  return a + b
}