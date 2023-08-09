// Multiply all object values by x

// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

function myFunction(a, b){
    return Object.entries(a).reduce((acc, [key, value]) => {
        return {...acc, [key]: value *b};
    }, {});
}

console.log(myFunction({a: 1, b: 2, c: 3}, 3));
