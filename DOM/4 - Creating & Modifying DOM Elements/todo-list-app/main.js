document.addEventListener("DOMContentLoaded", function () {

    let todoCounter = 0;
    const addTodoInputElement = document.querySelector("#new-todo");

    const addTodoButton = document.querySelector("#add-todo");
    const todosList = document.querySelector("#todos-list")
    addTodoButton.addEventListener("click", function () {

        const newTodo = addTodoInputElement.value;
        const todoItemElement = createNewTodo(newTodo);
        todosList.append(todoItemElement);
        addTodoInputElement.value = ""
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

        listItem.append(todoCompletion, todoTextElement, deleteButton);

        return listItem;

    }

})