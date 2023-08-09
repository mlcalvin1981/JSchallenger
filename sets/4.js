// Creating Javascript Sets

// Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result

function myFunction(a, b, c){
const mySet = new Set();
mySet.add(a);
mySet.add(b);
mySet.add(c);
return mySet;
}

console.log(myFunction(1, 'b', 3));