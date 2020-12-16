// Classes are syntax sugar for constructor functions
class Department {
    // private readonly id: string
    // private name: string;
    // the private keyword makes employees only accesible within this specific Department class
    private employees: string[] = []

    constructor(private id: string, public name:string) {
    }

    // method associated with this class
    describe() {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInfo() {
        console.log(this.employees.length, this.employees )
    }
}

// Inheritance. Use super() in a class that ineherits from another class
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT')
    }
}

//Create a new object based on the blueprint of Department class
const accounting = new ITDepartment( 'd1', ['Devin'])
accounting.describe()
accounting.addEmployee('Max')


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();