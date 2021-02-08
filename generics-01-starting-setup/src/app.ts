// GENERICS: An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done!')
//     }, 2000);
// })

// promise.then(data =>{
//     //data.split(" ")
// })
//Brie is cool
// Creating and using a generic function. This tells typescript that objA & objB can be diff datatypes
// For generic types, you can set certain contstraints for what types are allowed
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

interface Lengthy {
    length: number
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
    // return a tuple
    let descriptionText = 'Got no value'
    if (el.length === 1) { descriptionText = 'Got 1 element' }

    else if (el.length > 1) { descriptionText = `Got ${el.length} elements.` }
    return [el, descriptionText]
}

// the 'keyof' constraints
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

// Generic Classes
// NB: Generics should be used when you want to lock in a certain type and use it through a class or function
extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Devin');
textStorage.addItem('Nicolle');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();