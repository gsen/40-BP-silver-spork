
document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEYS = {
        todoApp: "todo-app"
    }
    class Storage {

        save(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        get(key) {
            const data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            } else { return null; }
        }

    }


    const storage = new Storage();

    let app;

    function loadAppFromStorage() {

        const existingApp = storage.get(STORAGE_KEYS.todoApp);
        if (existingApp?.boards.length) {


            // load existing board
            let selectedBoard = existingApp.boards[0];
            // render selectedBoard;
        } else {
            app = {
                boards: []
            }
        }

    }


    loadAppFromStorage();





    const CUSTOM_EVENTS = {
        openNewCardDialog: "open-new-card-dialog",
        saveCard: "save-card"
    }


    const addBoardButton = document.getElementById("btn-new-board");


    addBoardButton.addEventListener("click", function () {
        let boardName = prompt("Enter the board name");
        createNewBoard(boardName);

    })




    function createNewBoard(boardName) {
        if (boardName) {
            let board = new Board(boardName);
            app.boards.push(board)
            storage.save(STORAGE_KEYS.todoApp, app)
        } else {
            alert("You need to enter board name")
        }


    }


    const cardDialog = document.querySelector("#new-card-dialog");

    const cardForm = document.querySelector("#new-card-form");
    cardDialog.addEventListener(CUSTOM_EVENTS.openNewCardDialog, (event) => {

        const { target: dialog, detail } = event;

        dialog.classList.remove("hidden");
        let form = dialog.querySelector("form");
        form.dataset.listId = detail.listId;

    });
    cardForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const title = formData.get("title");
        const description = formData.get("description");
        const dueDate = formData.get("due-date");
        const listId = document.getElementById(form.dataset.listId);


        // const newCard = new Card(title, dueDate, description);
        // this.cards.push(newCard);
        // this.renderCard(newCard);

        const addCardEvent = new CustomEvent(CUSTOM_EVENTS.saveCard, {
            detail: {
                title, description, dueDate
            }
        });

        listId.dispatchEvent(addCardEvent);
        form.dataset.listId = "";

        form.reset()


    })

    cardForm.addEventListener("reset", (event) => {
        cardDialog.classList.add("hidden");
    })



    class Card {
        constructor(name, dueDate, description) {
            this.name = name;
            this.dueDate = dueDate;
            this.description = description;
            this.id = crypto.randomUUID();
        }

        createCardElement() {

            const card = document.createElement("article");
            card.id = this.id;
            card.classList.add("card");

            const cardHeader = document.createElement("header");
            cardHeader.classList.add("card-header");
            cardHeader.textContent = this.name;

            const cardBody = document.createElement("section");
            cardBody.classList.add("card-body");

            const cardDescription = document.createElement("p");
            cardDescription.textContent = this.description;
            cardDescription.classList.add("card-description");

            const cardDueDate = document.createElement("p");
            cardDueDate.textContent = this.dueDate;
            cardDueDate.classList.add("card-due-date");

            cardBody.append(cardDescription, cardDueDate);

            card.append(cardHeader, cardBody)

            return card;

        }
    }



    class List {
        #listElement;
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
            this.#listElement = list;

            this.#listElement.addEventListener(CUSTOM_EVENTS.saveCard, this.handleNewCard.bind(this))
            // listItemsContainer.addEventListener('custom-event', this.handleNewCard.bind(this))
        }

        addNewCard() {

            const customEvent = new CustomEvent(CUSTOM_EVENTS.openNewCardDialog, {
                bubbles: true,
                cancelable: true,
                detail: {
                    listId: this.id,
                }
            })

            const cardDialog = document.querySelector("#new-card-dialog");
            cardDialog.dispatchEvent(customEvent);



        }

        handleNewCard(event) {

            // Array.from(event.target.children).forEach(child => child.dispatchEvent(new CustomEvent('custom-event', { detail: { ...event.detail } })))
            this.renderCard(event.detail)
        }

        renderCard({ title, description, dueDate }) {
            let newCard = new Card(title, dueDate, description);
            this.cards.push(newCard);
            const newCardElement = newCard.createCardElement();
            const cardsListContainer = this.#listElement.querySelector(".list-items");

            const listItem = document.createElement("li");
            listItem.append(newCardElement);

            cardsListContainer.append(listItem);
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
            if (listName) {
                const newList = new List(listName);
                this.lists.push(newList);
            }

        }
    }



})