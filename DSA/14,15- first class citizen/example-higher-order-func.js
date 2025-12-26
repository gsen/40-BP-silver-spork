// filter

// reduce

// map

let numbers = ["1", "2", "3"];

// map function transform to a different output
// let mappedNumbers = numbers.map(function (value, index, arr) {
//     console.log({ value, index, arr })
// })
let mappedNumbers = numbers.map(function (value, index, arr) {
    return Number(value)
})
console.log(numbers)
console.log(mappedNumbers)

console.log(numbers.map(function (value, key) {
    return { key, value }
}))

// even num=> num % 2

console.log("even numbers",

    mappedNumbers.filter(function (value, index) {
        return value % 2 === 0;
    })

)

let personList = [{
    name: "GS",
    age: 29
}, {
    name: "John",
    age: 31
},
{
    name: 'Jane',
    age: 28
}];

// show only people below 30
console.log(

    personList.filter(function (person) {
        return person.age < 30
    })
);

// reduce is used for aggregation
[1, 2, 4]
// let result = [1, 2, 4].reduce(function (accumulatedValue, currentValue) {
//     console.log({ accumulatedValue, currentValue })
//     return accumulatedValue + currentValue
// }, 0)
let result = [1, 2, 4].reduce(function (accumulatedValue, currentValue) {
    console.log({ accumulatedValue, currentValue })
    return accumulatedValue + currentValue
}, -2)

shoppingCart = [{
    title: "item 1",
    cost: 10
}, {
    title: "item2",
    cost: 20,
},
{
    title: "item3",
    cost: 30
}]
console.log({ result })

// this will only work once
// let cartTotal = shoppingCart.reduce(function (accumulated, item) {
//     console.log({ accumulated, cost: item.cost })
//     return accumulated.cost + item.cost;
// })


let cartTotal = shoppingCart.reduce(function (accumulated, item) {
    console.log({ accumulated, cost: item.cost })
    return accumulated.cost + item.cost;
}, 0)
console.log({ cartTotal })


