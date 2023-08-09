// Sort array by object property

// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

function myFunction(arr){
    let sorted = (c, d) => c.b - d.b;
    return arr.sort(sorted);
}

console.log(myFunction([{a:1, b:2}, {a:5, b:4}]));