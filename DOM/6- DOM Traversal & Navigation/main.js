const firstPara = document.querySelector(".text");

console.log(firstPara.parentElement);
console.log(firstPara.nextElementSibling)
console.log(firstPara.previousElementSibling);


const childElement = document.querySelector(".child");
console.log(childElement.parentElement);

console.log(childElement.closest(".parent"))
console.log(childElement.closest("form"))
