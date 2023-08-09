// Return the average of an array of numbers

// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function myFunction(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum /arr.length;
    return avg;
}

console.log(myFunction([10,100,40]));