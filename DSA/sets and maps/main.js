// sets

let set0 = new Set();
// add items in a set using add() method
set0.add(1);
set0.add(2);
set0.add(3);
set0.add(4);
set0.add(5);
let set1 = new Set([1, 2, 3, 4, 5]);

// iterating through a set using for..of loop
for (let item of set0) {
    console.log(item);
}
console.log("using forEach");

set0.forEach((value) => {
    console.log(value);
})

// converting set to array
// 1. Using spread operator
let arr1 = [...set0];
console.log(arr1);

// 2. Using Array.from() method
let arr2 = Array.from(set0);
console.log(arr2);

let firstSet = new Set([1, 2, 3, 4, 5, 6]);
let secondSet = new Set([1, 2, 5, 7, 8, 6]);

console.log("Union of two sets", firstSet.union(secondSet));

// diff firstSet - secondSet

console.log("Difference of two sets", firstSet.difference(secondSet));

console.log(firstSet.difference(secondSet));

console.log("Intersection");
console.log(firstSet.intersection(secondSet));

// how to implement differnce of two sets without builting functions

function difference(firstSet, secondSet) {
    let differenceSet = new Set(firstSet);
    for (let item of secondSet) {
        // if (difference.has(item)) {
        differenceSet.delete(item)
        // }
    }

    return differenceSet;
}

console.log("difference using custom implementation",
    difference(firstSet, secondSet));


function union(firstSet, secondSet) {
    let unionSet = new Set(firstSet);
    for (let item of secondSet) {
        unionSet.add(item)
    }
    return unionSet;
}

console.log("Union custom", union(firstSet, secondSet))

function intersection(firstSet, secondSet) {
    const intersectionSet = new Set();
    for (let item of secondSet) {
        if (firstSet.has(item)) {
            intersectionSet.add(item)
        }
    }
    return intersectionSet;
}

console.log("Custom intersection", intersection(firstSet, secondSet))

// creating union of two sets using spread operator
const unionSet = new Set([...firstSet, ...secondSet])
console.log({ unionSet });

let person1 = {
    name: "Gaurav",
    city: "Pune"

}

let person2 = {
    name: "John",
    city: "Pune"
}

let personSet = new Set([person1, person2])
let personSet2 = new Set([person1, person1])
let personSet3 = new Set([person1, {
    name: "Gaurav",
    city: "Pune"

}])

const setString = new Set([..."firefox"])

const setString2 = new Set([..."Firefox"])


console.log(set0.values())


