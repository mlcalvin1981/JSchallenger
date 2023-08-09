// Check if two dates are within 1 hour from each other

// Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.

function myFunction(a, b){
return Math.abs(a - b) /1000 /60 <= 60;
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 8:45:00')));