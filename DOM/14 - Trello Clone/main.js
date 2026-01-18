
document.addEventListener("DOMContentLoaded", () => {
    const app = {
        boards: []
        // boards: [

        //     //     {
        //     //     id: "board-id",
        //     //     name: "board-name",
        //     //     lists: [{
        //     //         id,
        //     //         title,
        //     //         cards: [{
        //     //             name,
        //     //             id,
        //     //             description,
        //     //             dueDate
        //     //         }]
        //     //     }]
        //     // }

        // ]
    }
    const addBoardButton = document.getElementById("btn-new-board");
    addBoardButton.addEventListener("click", function () {
        let boardName = prompt("Enter the board name");
        createNewBoard(boardName);

    })
    function createNewBoard(boardName) {

        let board = new Board(boardName);
        app.boards.push(board)

    }
    class Board {
        constructor(name) {
            this.name = name;
            this.lists = [];
            this.id = crypto.randomUUID();
            this.render();
        }

        render() {
            const boardsContainer = document.getElementById("boards-container");

            const boardItem = document.createElement("li");
            boardItem.id = this.id;
            boardItem.textContent = this.name;

            boardsContainer.append(boardItem);
        }
    }



})