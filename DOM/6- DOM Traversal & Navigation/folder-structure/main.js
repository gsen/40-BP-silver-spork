let files = {
    name: "root",
    children: [{
        name: "folder 1",
        children: [{
            name: "file 1.1"
        }, {
            name: "file 1.2"
        }]
    }, {
        name: "folder 2",
        children: [
            { name: "file 2.1" },
            {
                name: "sub folder",
                children: [{
                    name: "sub file 1"
                }]
            }
        ]
    }]
}

document.addEventListener("DOMContentLoaded", function () {

    function createTreeStructure(data) {
        const treeNode = document.createElement("li");
        treeNode.textContent = data.name;
        if (data.children) {
            const parentNode = document.createElement("ul");
            parentNode.classList.add("hidden");

            data.children.forEach(child => parentNode.append(createTreeStructure(child)))
            const nodeStatusElement = document.createElement("span");
            nodeStatusElement.textContent = "▷"
            treeNode.prepend(nodeStatusElement);
            treeNode.append(parentNode);

            treeNode.addEventListener("click", function (event) {
                event.stopPropagation();
                if (parentNode.classList.contains("hidden")) {
                    parentNode.classList.remove("hidden");
                    treeNode.firstElementChild.textContent = "▽"
                } else {
                    parentNode.classList.add("hidden");
                    treeNode.firstElementChild.textContent = "▷";
                }
            })
        }
        return treeNode;
    }

    const container = document.createElement("section");
    container.id = "container";

    const list = document.createElement("ul");
    list.append(createTreeStructure(files));
    container.append(list)

    document.body.append(container);
})