// Check if property exist in object

// Write a function that takes an object (a) and a string (b) as argumeny. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

function myFunction(a, b){
    return b in a;
}

console.log(myFunction({a: 1, b: 2, c: 3}, 'b'));
