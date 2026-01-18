document.addEventListener("DOMContentLoaded", () => {

    let insideDropTarget = false;
    const target = document.querySelector("#target");
    const draggableElements = document.querySelectorAll("[draggable='true']");

    draggableElements.forEach(element => {
        element.addEventListener("dragstart", e => {
            console.log("element has started dragging");
            e.dataTransfer.setData("text/plain", e.target.id);
        })
    });
    target.addEventListener("dragenter", (e) => {
        console.log("draggable element has entered")
        console.log(e);

    })

    target.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("draggable element is over the target")
    });

    target.addEventListener("drop", (e) => {
        e.preventDefault();
        const elementId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(elementId);
        console.log("draggable element has been dropped")
        target.append(draggedElement);
    });

    target.addEventListener("dragleave", (e) => {
        console.log("draggable element has left")
        console.log(e);
        insideDropTarget = false;

    })
    // draggableElement.addEventListener("dragend", (e) => {
    //     e.preventDefault();
    //     console.log("element has stopped dragging", e);

    // })

    let fileInput = document.querySelector("#file-input");

    fileInput.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.target.style.borderStyle = "dashed";
        console.log("file is over the input");
    })

    fileInput.addEventListener("dragleave", (e) => {
        e.target.style.borderStyle = "none";
    })
    fileInput.addEventListener("drop", (e) => {
        e.preventDefault();
        fileInput.files = e.dataTransfer.files;
        e.target.style.borderStyle = "none";

    })

})