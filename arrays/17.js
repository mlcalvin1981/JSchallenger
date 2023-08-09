// Merge two arrays with duplicate values

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge reult in ascending order. Return the resulting array

function myFunction(a, b){
    let merge = a.concat(b);
    let noDupl = Array.from(new Set(merge));
    let sorted = noDupl.sort();
    return sorted;
}

console.log(myFunction([1,2,3], [3,4,5]));
