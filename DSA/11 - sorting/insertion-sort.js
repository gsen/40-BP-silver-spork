const input = [5, 2, 9, 1];
// [2, 5, 9, 1]
function insertionSort(list) {

    for (let index = 1; index < list.length; index++) {
        let current = list[index]; // 1
        let j = index - 1; // 9
        console.log({ current })
        while (j >= 0 && list[j] > current) {
            console.log({ j })
            list[j + 1] = list[j];
            console.log(list)
            // [2, 2, 5, 9]
            j--; // -1
        }

        // [1, 2, 5, 9]
        list[j + 1] = current;
        console.log("After swapping", list)
    }

    return list;

}

console.log(insertionSort(input))