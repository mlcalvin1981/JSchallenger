// Get last n elements of an array

// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function myFunction(a){
    return a.slice(-3);
}

console.log(myFunction([1,2,3,4]));
