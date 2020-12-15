// Classes are syntax sugar for constructor functions
class Department {
    name: string;

    constructor(n:string) {
        this.name = n
    }
}

//Create a new object based on the blueprint of Department class
const accounting = new Department('Accounting')