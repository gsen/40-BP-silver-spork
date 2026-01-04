document.addEventListener("DOMContentLoaded", function () {

    let todoCounter = 0;
    const addTodoInputElement = document.querySelector("#new-todo");

    const addTodoButton = document.querySelector("#add-todo");
    const todosList = document.querySelector("#todos-list")

    listenToTabChange();
    updateStats();

    addTodoButton.addEventListener("click", function () {

        const newTodo = addTodoInputElement.value;
        const todoItemElement = createNewTodo(newTodo);
        todosList.append(todoItemElement);
        addTodoInputElement.value = ""
        updateStats();
    })



    function createNewTodo(todoText) {

        //    <li class="todo-item">
        //        <input type="checkbox" />
        //        <p>Some todo</p>
        //        <button>Delete</button>
        //    </li>

        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        listItem.id = `todo-item-${++todoCounter}`;

        const todoCompletion = document.createElement("input");
        todoCompletion.type = "checkbox";

        todoCompletion.addEventListener("change", function (event) {

            const checkbox = event.target;
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }

        })


        const todoTextElement = document.createElement("p");
        todoTextElement.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", removeTodo)
        deleteButton.dataset.todoId = listItem.id;

        listItem.append(todoCompletion, todoTextElement, deleteButton);

        return listItem;

    }

    function removeTodo(event) {
        let deleteButton = event.target;
        const todoId = deleteButton.dataset.todoId;
        const todoListItem = document.getElementById(todoId);
        todoListItem.remove();
    }


    function tabChanged(event) {
        clearActiveTabs();
        const tab = event.target;
        tab.classList.add("active");
        updateTodoList(tab.dataset.value)
    }

    function clearActiveTabs() {
        Array.from(document.querySelectorAll(".tabs .tab-item"))
            .forEach(tab => tab.classList.remove("active"));
    }

    function updateTodoList(tabType) {
        const todoItems = document.querySelectorAll(".todo-item")
        for (let todo of todoItems) {
            todo.classList.remove("hidden");
        }
        if (tabType === "completed") {
            for (let todoItem of todoItems) {
                if (!todoItem.classList.contains("completed")) {
                    todoItem.classList.add("hidden")
                }
            }
        } else if (tabType === "todo") {
            for (let todo of todoItems) {
                if (todo.classList.contains("completed")) {
                    todo.classList.add("hidden");
                }
            }
        }
    }

    function listenToTabChange() {
        let tabs = document.querySelectorAll(".tabs li.tab-item");
        for (let tab of tabs) {
            tab.addEventListener("click", tabChanged)
        }
    }

    function updateStats() {
        let items = document.querySelector("#todos-list");
        let totalSpan = document.createElement("span");
        totalSpan.textContent = items.children.length;

        const totalStats = document.querySelector("#total");
        totalStats.replaceChildren("Total: ", totalSpan);
    }


})