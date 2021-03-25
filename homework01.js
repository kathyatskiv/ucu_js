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
console.log(tuckIn([1,10],[2,3,4,5,6,7,8,9])); // [1,2,3,4,5,6,7,8,9,10]
console.log(tuckIn([15,150],[45,75,35])); // [15,45,75,35,150]
console.log(tuckIn([[1,2],[5,6]],[[3,4]])); // [[1,2],[3,4],[5,6]]
console.log(tuckIn(['a','f'],['b','c','d','e'])); // ['a','b','c','d','e','f']
console.log(tuckIn([1,2,3,4],[3,6,8]) + "\n\n"); // null

//#2 Find the Smallest and Biggest Numbers
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr){
    let min = arr[0];
    let max = arr[0];

    arr.forEach(element => {
        max = (element > max) ? element : max
        min = (element < min) ? element : min;
    });

    return [min,max];
}

// Testing #2
console.log("Task 2")
console.log(minMax([1,2,3,4,5])); // [1,5]
console.log(minMax([-100,0,2546])); // [-100,2546]
console.log(minMax([2334454,5])); // [5,2334454]
console.log(minMax([1])); // [1,1]
console.log("\n\n");

//#3 Check if One Array can be Nested in Another
function canNest(arrA, arrB){
    let minMaxA = minMax(arrA);
    let minMaxB = minMax(arrB);
    
    let res = (minMaxA[0] > minMaxB[0]) && (minMaxA[1] < minMaxB[1]) ? true : false;
    return res;
}

// Testing #3
console.log("Task 3")
console.log(canNest([1,2,3,4],[0,6])); // true
console.log(canNest([3,1],[4,0])); // true
console.log(canNest([9,9,8],[8,9])); // false
console.log(canNest([1,2,3,4],[2,3])); //false