// Count number of negative values in array

// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

function myFunction(a){
    let count = 0;
    for(i = 0; i < a.length; i++){
        if(a[i] < 0)
        count++;
    }
    return count;
}
console.log(myFunction([1,-2,2,-4]));
