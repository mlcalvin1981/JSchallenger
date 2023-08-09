// Check if all array elements are equal

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function myFunction(arr){
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[0] === arr[i])
        count++;
    }
    return count === arr.length;
}

console.log(myFunction([true, true, true, true]));
