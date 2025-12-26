
// 1...n=> sum

// 1,2,3,4,5 => 1+2+3+4+5 = 15

// function sumOfNumbers(n){
//     let sum =0;
//     for(let index =1; index<= n;index++)
//         sum+= index;

//     return sum;

// }
// 1..5
// n=5
function recursiveSum(n) {
    console.log(n)
    // base case
    if (n === 1) {
        return 1
    }
    return n + recursiveSum(n - 1)
}

console.log(recursiveSum(5))

// factorial 

// 5! 

// 5*4*3*2*1
// 3!
// 3*2*1

// base condition

// n == 1

// // recursive case
// 5 * n - 1 * n - 2 * n - 3 * n - 4

// 5
function factorialRecursive(number) {
    if (number === 1) {
        return 1;
    }
    return number * factorialRecursive(number - 1)
}

// 5 * factorialRecursive(4) 
// 4 * factorialRecursive(3)
// 3 * factorialRecursive(2)
// 2 * factorialRecursive(1)
//  return 1 

// 5 * factorialRecursive(4)
// 4 * factorialRecursive(3)
// 3 * factorialRecursive(2)
// return 2 * 1

// 5 * factorialRecursive(4)
// 4 * factorialRecursive(3)
// return 3 * 2

// 5 * factorialRecursive(4)
// return 4 * 6

// return 5 * 24 => 120

// 2 ^ 3 => 2 * 2 * 2 => 8
// 4 ^ 2 => 4 * 4 => 16

// 5 ^ 0  => 1
// 2 ^ 0 => 1


function calculatePower(base, exponent) {

    // base condition
    if (exponent === 1) {
        return base
    }

    // recursive condition
    return base * calculatePower(base, exponent - 1)
}
console.log("---------- Calculate Power ---------------");

console.log(calculatePower(5, 2))

// [1,2,3,4,...n]

function sumOfArrayItems(arr, index = 0) {
    // base condition
    if (index === arr.length - 1) {
        return arr[index]
    }
    // recursive
    return arr[index] + sumOfArrayItems(arr, index + 1)
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5]))

// reverse a string using recursion

// hello
// elloh
// llohe
// lohel
// ohell

function reverseString(text, index = 0) {
    if (index === text.length) return ""
    return reverseString(text, index + 1) + text[index]
}

console.log(reverseString("hello"))


// helper recursive function

// [1,3,2,4,5,6,7,9] 

// // return a new array which has odd numbers

// [1,3,5,7,9]

function findOddValues(arr) {
    let accumulator = [];
    function helper(index) {
        if (index === arr.length)
            return
        if (arr[index] % 2 !== 0)
            accumulator.push(arr[index])
        helper(index + 1)
    }
    helper(0);
    return accumulator;
}

console.log("helper function recursion")
console.log(findOddValues([1, 3, 2, 4, 5, 6, 7, 9]));

// fibonacci

// 0,1,1,2,3,5,8,13..

function fibonacciSeries(n) {
    if (n < 2) return n;
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}
// Time complexity roughly O(2^n)

console.log(fibonacciSeries(6))
// f(5) => f(4) 
// memo{3: 2
//     2:1
//     1:1
// }
function fibonacciMemo(n, memo = {}) {
    if (n in memo) { return memo[n] }
    // if(memo[n]){ return memo[n]}
    if (n < 2) return n;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)
    return memo[n];
}

console.log("with memoization", fibonacciMemo(50))
// O(n)




