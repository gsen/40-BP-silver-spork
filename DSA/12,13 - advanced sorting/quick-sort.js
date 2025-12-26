// in place quick sorting

function quickSort(arr, low = 0, high = arr.length - 1) {
    console.log("quick sort called")
    console.log({ high, low });

    //base case
    if (low < high) {
        const pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;

}
function partition(arr, start = 0, end) {

    const pivot = arr[end];
    let j = start;
    let i = start - 1;
    console.log({ pivot, i, j })
    while (j < end) {
        if (arr[j] < pivot) {
            i++;
            console.log("before", arr);
            // swap the lesser element to the left side  of pivot
            // and higher element to the right side of pivot
            [arr[i], arr[j]] = [arr[j], arr[i]]
            console.log("after", arr);
        }
        j++;
    }
    // swap pivot to the correct position
    console.log("before pivot swapping", arr);
    [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];

    console.log("after pivot swapping", arr);

    return i + 1;
}

console.log(quickSort([10, 7, 8, 9, 1, 5]))

// algorithm - this is suitable for large datasets
// time complextity = O(log n)

// pivot - first element/last element
// random element can be chosen as pivot


// array is already sorted

// Worst case time complextiy O(n^2)

// this is not a stable algorithm
