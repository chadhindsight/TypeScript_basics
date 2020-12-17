// Classes are syntax sugar for constructor functions
class Department {
    // private readonly id: string
    // private name: string;
    // the private keyword makes employees only accesible within this specific Department class
    protected employees: string[] = []

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

//Create  new objects based on the blueprint of Department class!
const it = new ITDepartment( 'd1', ['Devin'])
it.describe()
it.addEmployee('Max')

class AccoutingDepartment extends Department {
    private lastReport: string
    
     get mostRecentReport() {
        if(this.lastReport) return this.lastReport
        throw new Error('No reports found!')
    }
    
    // Allows you to set a value
    set mostRecentReport(val: string) {
        if(!val) new Error(' Please pass a valid value')
        this.addReport(val)
        
    }

    constructor(id: string, private reports: string[] ) {
        super(id, 'AC')
        this.lastReport = this.reports[0]
    }
    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }
    printReports() {
        console.log(this.reports)
    }
    addEmployee(name: string) {
        if(name === 'Max') {
            return
        } 
            this.employees.push(name )
    }
}

const accounting = new AccoutingDepartment('d2', [])
accounting.addEmployee('Nicolle')
console.log(it)
