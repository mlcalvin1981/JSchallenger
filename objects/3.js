// Accessing object properties three

// Write a function that takes an object with properties and a string as arguments. It should return the value of the property with key equals to the value of the string

function myFunction(obj, key){
    return obj[key];
}

console.log(myFunction({ continent: 'Asia', country: 'Japan'}, 'continent'));
