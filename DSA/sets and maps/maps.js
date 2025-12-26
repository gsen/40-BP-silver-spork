// what is a map

// it is an object which consists of 
// [Key, value] pairs

let map = new Map();
map.set("a", 1);
map.set("b", 2)

console.log("values ", map.values());
console.log("keys ", map.keys());

// internal representation of map 
// can be visualized as array of arrays
// [
//     ["a",1],
//     ["b",2]
// ]

for (let [key, value] of map) {
    console.log(key, value)

}

map.has("a"); // true
map.has("b"); // true

map.has("c"); // false

// map.delete("a")

// map.clear()

map.get("a")

for (let key of map.keys()) {
    console.log(key);

}
for (let value of map.values()) {
    console.log(value);

}

for (let [key, value] of map.entries()) {
    console.log(key, value);

}

map.forEach((value, key) => {
    console.log("using foreach", key, value)
})

console.log("values using foreach");

map.values().forEach(val => console.log(val))
console.log("keys using foreach");
map.keys().forEach(val => console.log(val))

// converting map to Array
Array.from(map)


let simpleDict = new Map([
    ["a", 2], ["b", 3]
])

let dictionaryFruits = new Map([
    ["a", ["apple", "apricot"]],
    [
        "b", [
            "banana"]
    ],
    ["g", ["grapes", "guava"]]
])

dictionaryFruits.set("d", ["dragon fruit"])

// find frequency of each word in a given string;

let sentence = `how many repeating words are there in this sentence 
which has repeating words`;

function wordFrequency(sentence) {
    let words = sentence.split(" ");
    let frequencyMap = new Map();

    for (let word of words) {
        if (!frequencyMap.has(word)) {
            frequencyMap.set(word, 1);
        } else {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
        }
    }
    return frequencyMap;
}
console.log(wordFrequency(sentence))

let result = wordFrequency(sentence);
let repeatingWords = [];
for (let [key, val] of result) {
    if (val > 1) {
        repeatingWords.push(key);
    }
}
console.log(repeatingWords);



