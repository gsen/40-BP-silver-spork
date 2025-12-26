function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    console.log({ left, right })
    return merge(mergeSort(left), mergeSort(right));
}


function merge(leftArray, rightArray) {
    console.log("calling merge");

    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    console.log({ leftArray, rightArray })

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        console.log(leftArray[leftIndex]);
        console.log(rightArray[rightIndex])
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }

    }

    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex++]);
    }

    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex++]);
    }

    return mergedArray;
}


// Best case / worst case / avg case -  O(n*log n)

// stable algorithm 
// large datasets

console.log(mergeSort([5, 2, 9, 1]));