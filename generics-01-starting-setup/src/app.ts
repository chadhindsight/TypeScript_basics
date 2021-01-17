// GENERICS: An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.
const names: Array = [];

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!')
    }, 2000);
})