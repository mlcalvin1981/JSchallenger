// How many times does a character occur?

// Write a function that takes two string (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b){
    let count = 0;
    for(i = 0; i < b.length; i++){
        if(b[i] === a)
        count++;
    }
    return count;
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'));