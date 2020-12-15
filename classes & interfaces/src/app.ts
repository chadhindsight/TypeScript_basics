// Classes are syntax sugar for constructor functions
class Department {
    name: string;

    constructor(n:string) {
        this.name = n
    }
    // method associated with this class
    describe() {
        console.log('Department: ' + this.name)
    }
}

//Create a new object based on the blueprint of Department class
const accounting = new Department('Accounting!')
accounting.describe()