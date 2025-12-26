// issubarray.sj
// [1 2 5 4 3]

// 1. first element which is greater than it's successor => start subarray
// 2.  if you traverse in reverse -> first element smaller than
//  the next element will be end of subarray

// 3. once you have the sub array reverse it

// 4. check if the the complete array after sub array reversal is sorted

// if sorted return true
// else return false


function isArraySorted(arr) {

    let startIndex = -1;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[index + 1]) {
            startIndex = index;
            break;
        }
    }

    if (startIndex === -1) {
        return true;
    }

    let endIndex = 0;

    for (let index = arr.length - 1; index > 0; index--) {
        if (arr[index] < arr[index - 1]) {
            endIndex = index;
            break;
        }
    }

    while (startIndex < endIndex) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]]
        startIndex++;
        endIndex--;
    }

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[index + 1]) {
            return false
        }
    }

    return true;

}

console.log(isArraySorted([[1, 2, 5, 4, 3]]));
console.log(isArraySorted([1, 4, 2, 3]));