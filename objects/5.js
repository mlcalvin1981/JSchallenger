// Check if property exists in object and is truthy

// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should no be null or undefined or false. Return false otherwise.

function myFunction(a, b){
    return a[b] ? true : false;
}

console.log(myFunction({a: 1, b: 2, c: 3}, 'b'));
