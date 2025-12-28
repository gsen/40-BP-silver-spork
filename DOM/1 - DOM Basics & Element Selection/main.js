console.log("this is our main file")

let contentPara = document.getElementById("content");
console.log({ contentPara })

contentPara.style.fontFamily = "arial"
contentPara.style.fontSize = "24px"

let container = document.getElementById("container");
// this will not work since HTMLElementCollection is not an array
// container.children.filter((element) => {
//     console.log(element)
// })
Array.from(container.children).forEach(element => {
    console.log(element)
});

for (let child of container.children) {
    console.log(child);
}

// dom traversal methods


// 1. document.getElementById
// console.log(document.getElementById("content"));
// 2. document.getElementsByClassName
// 3. document.querySelector

console.log(document.querySelector("#content"))

console.log(document.querySelector("#container p"))
console.log(document.querySelectorAll("#container span"))

console.log(document.querySelector(".outer > li > p"))
console.log(document.querySelector(".outer  li p"))
let para = document.querySelector(".outer p");

console.log("text content", para.textContent)
console.log("inner text", para.innerText)
console.log("inner html", para.innerHTML)

// para.textContent = "this is modified <span>this is inside the para</span>"
para.innerText = "this is modified <span>this is inside the para</span>"
para.innerHTML = "this is modified <span style='color:blue'>this is inside the para</span>"



// HW
// document.getElementsByTagName()


// gets element with name attribute = firstName
let inputElement = document.querySelector(`input[name='firstName']`)
console.log(inputElement)


let allColumns = document.querySelectorAll("#age-table td");
console.log(allColumns);

for (let column of allColumns) {
    if (column.textContent.includes("Age")) {
        // console.log(column)
        return column
        break;
    }
}

document.getElementById("content").setAttribute("data-value", 2)
