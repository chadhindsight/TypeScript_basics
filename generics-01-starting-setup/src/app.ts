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

// Creating a generic function. This tells typescript that objA & objB can be diff datatypes
function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 31 });
console.log(mergedObj);