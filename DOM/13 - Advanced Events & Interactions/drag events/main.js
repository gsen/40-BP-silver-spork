document.addEventListener("DOMContentLoaded", () => {

    let insideDropTarget = false;
    const target = document.querySelector("#target");
    const draggableElement = document.querySelector("[draggable='true']");

    draggableElement.addEventListener("dragstart", e => {
        console.log("element has started dragging");

    })
    target.addEventListener("dragenter", (e) => {
        console.log("draggable element has entered")
        console.log(e);

        insideDropTarget = true
        // if (insideDropTarget) {
        //     let newPara = document.createElement("p");
        //     newPara.textContent = e.target.textContent;
        //     target.append(newPara);
        //     e.target.remove();
        // }
    })

    target.addEventListener("dragleave", (e) => {
        console.log("draggable element has left")
        console.log(e);
        insideDropTarget = false;

    })
    draggableElement.addEventListener("dragend", (e) => {
        console.log("element has stopped dragging", e);


    })

})