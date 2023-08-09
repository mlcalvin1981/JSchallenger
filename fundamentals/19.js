// Split a number into its digits

// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

function myFunction(a){
    let numStr = String(a);
    let strArr = numStr.split('');
    let numArr = strArr.map(Number);
    return numArr;
}

console.log(myFunction(10));