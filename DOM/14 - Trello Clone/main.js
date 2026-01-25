
document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEYS = {
        todoApp: "todo-app"
    }


    const CUSTOM_EVENTS = {
        openNewCardDialog: "open-new-card-dialog",
        saveCard: "save-card",
        saveToStorage: "save-to-storage"
    }

    class Store {
        constructor(storageKey) {
            this.key = storageKey;
        }

        save(data) {
            localStorage.setItem(this.key, JSON.stringify(data));
        }

        get() {
            const data = localStorage.getItem(this.key);
            if (data) {
                return JSON.parse(data);
            } else { return null; }
        }

    }

    const store = new Store(STORAGE_KEYS.todoApp);


    // const eventTarget = new EventTarget()
    // eventTarget.addEventListener()
    // eventTarget.dispatchEvent()

    class EventBus extends EventTarget {
        static instance;
        // singleton pattern
        static getInstance() {
            if (!EventBus.instance) {
                EventBus.instance = new EventBus();
            }
            return EventBus.instance;
        }


    }




    class TodoApp {
        boards;
        constructor() {
            this.boards = [];

            this.registerEvents();
        }

        addBoard(board) {
            this.boards.push(board);
            this.save();
        }

        save() {
            store.save(this);
        }

        registerEvents() {
            EventBus.getInstance().addEventListener(CUSTOM_EVENTS.saveToStorage, this.save.bind(this))
        }

        static getTodoApp() {
            const existingApp = store.get();
            let app = new TodoApp();
            if (existingApp?.boards.length) {
                let index = 0;
                for (let board of existingApp.boards) {
                    let boardObj = new Board(board.name, board.id);
                    boardObj.render();
                    if (index === 0) {
                        boardObj.renderAddListButton();
                    }
                    if (board.lists.length) {
                        for (let list of board.lists) {
                            const listObject = new List(list.name, list.id)

                            if (list.cards.length) {
                                for (let card of list.cards) {
                                    listObject.renderCard(card, false);
                                }
                            }

                            boardObj.lists.push(listObject);
                        }
                    }
                    app.addBoard(boardObj);
                }

                // app.boards[0].renderAddListButton();

            }
            return app;
        }

    }


    class Card {
        constructor(name, dueDate, description, id = crypto.randomUUID()) {
            this.name = name;
            this.dueDate = dueDate;
            this.description = description;
            this.id = id;
        }

        createCardElement() {

            const card = document.createElement("article");
            card.id = this.id;
            card.classList.add("card");

            const cardHeader = document.createElement("header");
            cardHeader.classList.add("card-header");
            cardHeader.textContent = this.name;

            const deleteCard = document.createElement("span");
            deleteCard.classList.add("delete-card-btn");
            deleteCard.textContent = "X"
            cardHeader.append(deleteCard);

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
        constructor(name, id = crypto.randomUUID(), cards = []) {
            this.name = name;
            this.id = id;
            this.cards = cards;
            this.render();
        }

        render() {

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
            this.#listElement.addEventListener("click", this.handleClick.bind(this))
            // listItemsContainer.addEventListener('custom-event', this.handleNewCard.bind(this))
        }

        handleClick(event) {
            if (event.target.closest(".card")) {
                // delete for card needs to handled
                // remove from ui
                const cardToDelete = event.target.closest(".card");
                console.log(cardToDelete.id);
                cardToDelete.parentElement.remove();
                // remove from app object
                this.cards = this.cards.filter(card => card.id !== cardToDelete.id);
                // update in local storage
                this.syncToStore();
            }
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

        renderCard({ name, description, dueDate, id }, saveToStorage = true) {
            let newCard = new Card(name, dueDate, description, id);
            this.cards.push(newCard);
            if (saveToStorage) {
                this.syncToStore();
            }

            const newCardElement = newCard.createCardElement();
            const cardsListContainer = this.#listElement.querySelector(".list-items");

            const listItem = document.createElement("li");
            listItem.append(newCardElement);

            cardsListContainer.append(listItem);
        }

        syncToStore() {
            EventBus.getInstance().dispatchEvent(new CustomEvent(CUSTOM_EVENTS.saveToStorage));
        }
    }

    class Board {
        constructor(name, id = crypto.randomUUID(), lists = []) {
            this.name = name;
            this.lists = lists;
            this.id = id;
        }

        render() {
            const boardsContainer = document.getElementById("boards-container");

            const boardItem = document.createElement("li");
            boardItem.id = this.id;
            boardItem.textContent = this.name;

            boardsContainer.append(boardItem);

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
                // let app = store.get()
                // let index = app.boards.findIndex(board => board.id === this.id)
                // app.boards[index] = this;
                // store.save(app)
                EventBus.getInstance().dispatchEvent(new CustomEvent(CUSTOM_EVENTS.saveToStorage))

            }

        }
    }

    let app = TodoApp.getTodoApp();
    const addBoardButton = document.getElementById("btn-new-board");


    addBoardButton.addEventListener("click", function () {
        let boardName = prompt("Enter the board name");
        createNewBoard(boardName);

    })




    function createNewBoard(boardName) {
        if (boardName) {
            let board = new Board(boardName);
            board.render();
            board.renderAddListButton();
            app.addBoard(board);

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

        const name = formData.get("title");
        const description = formData.get("description");
        const dueDate = formData.get("due-date");
        const listId = document.getElementById(form.dataset.listId);


        // const newCard = new Card(title, dueDate, description);
        // this.cards.push(newCard);
        // this.renderCard(newCard);

        const addCardEvent = new CustomEvent(CUSTOM_EVENTS.saveCard, {
            detail: {
                name, description, dueDate
            }
        });

        listId.dispatchEvent(addCardEvent);
        form.dataset.listId = "";

        form.reset()


    })

    cardForm.addEventListener("reset", (event) => {
        cardDialog.classList.add("hidden");
    })





})