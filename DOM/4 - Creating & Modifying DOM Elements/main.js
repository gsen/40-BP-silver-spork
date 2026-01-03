
const section = document.createElement("section");
const para = document.createElement("p");
para.id = "title";
para.textContent = "some random text comes here";

const additonalPara = document.createElement('p');
additonalPara.textContent = "some more text for additional para";
additonalPara.id = "additional"

const link = document.createElement("a");
link.href = "https://google.com";
link.textContent = "Visit google."
link.target = "_blank";

// append function characteristics 👇🏼
// multiple nodes can be appended at a time
// text nodes can be added
// doesn't return anything

// append child
// only works with node
// returns the appended node
// only one node can be appended at a time.

console.log("append", section.append(additonalPara, link, "created using string"))

console.log("append child", section.appendChild(para));

document.body.appendChild(section);

const span = document.createElement("span");
span.textContent = "this will be inserted before the link";
section.insertBefore(span, link)

const prependElement = document.createElement("p");
prependElement.textContent = "will be added at the beginning";

const anotherElement = document.createElement("div");
anotherElement.textContent = "text node inside the div";

// it will alway add elements to the beginning. 
section.prepend(prependElement, anotherElement);


const removeButton = document.createElement("button");
removeButton.id = "remove-button"
removeButton.textContent = "Remove topmost element"
removeButton.addEventListener("click", function () {

    if (section.firstChild && section.firstChild.id !== removeButton.id) {
        // section.firstChild.remove();
        section.removeChild(section.firstChild)
    } else {
        alert("All elements removed")
    }
})

section.append(removeButton)

// diff btw remove and removeChild

// 1. remove child needs to be called on the parent element
// 2. remove child returns the node which was removed
// 3. remove is directly called on the element which is to be removed.
// 4. remove doesn't return anything - returns undefined.


// there are two ways to remove all child nodes of an element.

// 1. innerHTML = "" - we can set it to blank
// 2. replaceChildren() method - without any arguments - it will clear all the child 
// nodes

const newPara = document.createElement("p");
newPara.textContent = "this will replace all existing children";

const newLink = document.createElement("a");
newLink.textContent = "New Link";
newLink.href = "https://mail.google.com";

section.replaceChildren(newPara, newLink)

// section.replaceChildren();







