let numbers = [22, 1, 33, 12, 14, 16];

function bubbleSort(list) {

    for (let outerIndex = 0; outerIndex < list.length - 1; outerIndex++) {
        let swapped = false;

        console.log({ outerIndex })

        for (let innerIndex = 0; innerIndex < list.length - outerIndex - 1; innerIndex++) {
            if (list[innerIndex] > list[innerIndex + 1]) {
                // let temp = list[innerIndex];
                // list[innerIndex] = list[innerIndex + 1];
                // list[innerIndex + 1] = temp;

                [list[innerIndex], list[innerIndex + 1]] = [list[innerIndex + 1], list[innerIndex]]
                swapped = true;
            }

        }
        if (!swapped) {
            break;
        }

    }
    return list;
}

console.log(bubbleSort(numbers))

// Worst case time complexity = O(n^2)
// use it for small data sets only
// mostly used to teach sorting.
