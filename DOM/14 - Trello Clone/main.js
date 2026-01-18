
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
    const addListButton = document.getElementById

    addBoardButton.addEventListener("click", function () {
        let boardName = prompt("Enter the board name");
        createNewBoard(boardName);

    })


    function createNewBoard(boardName) {

        let board = new Board(boardName);
        app.boards.push(board)

    }

    class List {
        constructor(name) {
            this.name = name;
            this.id = crypto.randomUUID();
            this.cards = [];
            this.render();
        }

        render() {
            // <section class="list" id="list1">
            //     <header>
            //         <h2>List Name</h2>
            //     </header>
            //     <ul class="list-items">
            //         <li class="item">card content</li>
            //         <li class="item">card content</li>
            //         <li class="item">card content</li>
            //     </ul>
            //     <footer>
            //         <button>Add Card</button>
            //     </footer>
            // </section>

            const list = document.createElement("section");
            list.classList.add("list");
            list.id = this.id;

            const header = document.createElement("header");
            const title = document.createElement("h2");
            title.textContent = this.name;

            header.append(title);

            const listItemsContainer = document.createElement("ul");
            listItemsContainer.classList.add("list-items");

            const footer = document.createElement("footer");


            const newCardButton = document.createElement("button");
            newCardButton.textContent = "New Card";
            newCardButton.addEventListener("click", this.addNewCard.bind(this));
            footer.append(newCardButton);

            list.append(header, listItemsContainer, footer);
            document.querySelector(".list-container").append(list);
        }

        addNewCard() {
            console.log("add new card called", this);

        }
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

            this.renderAddListButton();

        }



        renderAddListButton() {
            // <section>
            //     <button>New List</button>
            // </section>
            const section = document.createElement("section");
            const button = document.createElement("button");
            button.id = `add-list-btn-${this.id}`;
            button.textContent = "New List"
            button.addEventListener("click", this.addNewList.bind(this))
            section.append(button);

            document.querySelector(".list-container").append(section)
        }

        addNewList() {
            console.log("add new list called", this)
            const listName = prompt("Enter list name");

            const newList = new List(listName);
            this.lists.push(newList);

        }
    }



})