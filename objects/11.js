// Sum object values

// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a){
    return Object.values(a).reduce((sum, curr) => sum + curr, 0);
}

console.log(myFunction({a: 1, b: 2, c: 3}));
