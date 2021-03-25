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

//#2 Find the Smallest and Biggest Numbers
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr){
    let min = arr[0];
    let max = arr[0];

    arr.forEach(element => {
        element > max ? max = element :
        element < min ? min = element : null;
    });

    return [min,max];
}

// Testing #2
console.log("Task 2")
console.log(minMax([1,2,3,4,5])); // [1,5]
console.log(minMax([-100,0,2546])); // [-100,2546]
console.log(minMax([1])); // [1,1]
console.log("\n\n");

