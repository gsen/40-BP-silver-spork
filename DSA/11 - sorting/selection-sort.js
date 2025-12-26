
let numbers = [22, 1, 33, 12, 14, 16];

function selectionSort(list) {
    for (let outerIndex = 0; outerIndex < list.length; outerIndex++) {
        let minIndex = outerIndex;
        console.log({ outerIndex })
        for (let innerIndex = outerIndex + 1; innerIndex < list.length; innerIndex++) {
            if (list[minIndex] > list[innerIndex]) {
                minIndex = innerIndex;
            }
        }

        console.log({ minValue: list[minIndex], outerIndex, minIndex })

        // [list[minIndex], list[outerIndex]] = [list[outerIndex], list[minIndex]];
        let temp = list[outerIndex];
        list[outerIndex] = list[minIndex];
        list[minIndex] = temp;
        console.log(list);
    }

    return list;

}

console.log(selectionSort(numbers))
