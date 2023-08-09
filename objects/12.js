// Remove a property from an object

// Write a function that takes an object as argument. It should return an object with all original object properties. except for the propertywith key 'b'

function myFunction(obj){
    if("b" in obj){
        return delete obj.b && obj;
    }
}

console.log(myFunction({a: 1, b: 7, c: 3}));
