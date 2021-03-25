//#1 Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arrA, arrB){
    if (arrA.length != 2) return null;

    arrB.push(arrA[1]);
    arrB.reverse();
    arrB.push(arrA[0]);
    
    return arrB.reverse();
}

// Testing #1
console.log("Task 1")
console.log(tuckIn([1,2],[3,6,8])); // [1,3,6,8,2]
console.log(tuckIn([[1,2],[5,6]],[[3,4]])); // [[1,2],[3,4],[5,6]]
console.log(tuckIn(['a','f'],['b','c','d','e'])); // ['a','b','c','d','e','f']
console.log(tuckIn([1,2,3,4],[3,6,8]) + "\n\n"); // null



