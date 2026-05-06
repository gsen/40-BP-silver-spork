import readline from "node:readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("What is your name?", (name) => {
    console.log("Hello ", name);
    // input.close();
    askTodo();

});
const todos = [];
function askTodo() {
    input.question("Enter todo: ", (todo) => {
        if (todo == "exit") {
            console.log(todos);
            input.close();
        } else {
            todos.push(todo);
            console.log("New todo added");
            askTodo();

        }
    })
}
