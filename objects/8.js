// Creating Javascript objects three

// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

function myFunction(a, b){
    return a.reduce((acc, curr, i) => ({...acc, [curr]: b[i]}), {});

}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]));

