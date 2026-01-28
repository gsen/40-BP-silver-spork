
document.addEventListener("DOMContentLoaded", () => {

    const DELETE_SVG = `<svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
    const EDIT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`

    const STORAGE_KEYS = {
        todoApp: "todo-app"
    }


    const CUSTOM_EVENTS = {
        openNewCardDialog: "open-new-card-dialog",
        openEditCardDialog: "open-edit-card-dialog",
        saveCard: "save-card",
        saveToStorage: "save-to-storage",
        deleteList: "delete-list"
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
        selectedBoardIndex;
        constructor() {
            this.boards = [];
            this.selectedBoardIndex = 0;

            this.registerEvents();
        }

        addBoard(board, syncToStore = true) {
            this.boards.push(board);
            if (syncToStore) {
                this.save();
            }
        }

        save() {
            store.save(this);
        }

        registerEvents() {
            EventBus.getInstance().addEventListener(CUSTOM_EVENTS.saveToStorage, this.save.bind(this))
            document.querySelector("#boards-container").addEventListener("click", this.handleClick.bind(this))
        }

        handleClick(event) {

            if (event.target.closest(".board")) {
                const selectedBoard = event.target.closest(".board");
                console.log("board selected", selectedBoard.id)

                const clickedBoardIndex = this.boards.findIndex(board => board.id === selectedBoard.id)
                this.selectedBoardIndex = clickedBoardIndex;
                this.save(); // sync to local storage

                this.loadBoard(this.boards[this.selectedBoardIndex])

            }

        }

        loadDefaultBoard() {
            this.loadBoard(this.boards[this.selectedBoardIndex]);
        }

        loadBoard(board) {
            document.querySelectorAll(".list-container > .list")?.forEach(list => list.remove());
            document.querySelector(".new-list-section")?.remove();
            board.renderAddListButton();
            document.querySelector(".board.active")?.classList.toggle("active");
            document.getElementById(board.id).classList.add("active");
            for (let list of board.lists) {
                list.render();
                for (let card of list.cards) {
                    list.renderCard(card)
                }
            }

        }



        static getTodoApp() {
            const existingApp = store.get();
            let app = new TodoApp();
            app.selectedBoardIndex = existingApp.selectedBoardIndex ?? 0;
            if (existingApp?.boards.length) {
                let index = 0;
                for (let board of existingApp.boards) {
                    let boardObj = new Board(board.name, board.id);
                    boardObj.render();
                    if (board.lists.length) {
                        for (let list of board.lists) {
                            const listObject = new List(list.name, list.id)

                            if (list.cards.length) {
                                for (let card of list.cards) {
                                    listObject.addCard(card)
                                }
                            }

                            boardObj.lists.push(listObject);
                        }
                    }
                    app.addBoard(boardObj, false);
                    index++;
                }


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

            card.setAttribute("draggable", true);

            const cardHeader = document.createElement("header");
            cardHeader.classList.add("card-header");
            cardHeader.textContent = this.name;

            const deleteCard = document.createElement("span");
            deleteCard.classList.add("delete-card-btn");
            deleteCard.innerHTML = DELETE_SVG;

            const editCardButton = document.createElement("span");
            editCardButton.classList.add("edit-card-btn");
            editCardButton.innerHTML = EDIT_SVG;

            cardHeader.append(editCardButton, deleteCard);

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
        }

        render() {

            const list = document.createElement("section");
            list.classList.add("list");
            list.id = this.id;

            const header = document.createElement("header");
            header.classList.add("list-header")
            const title = document.createElement("h2");
            title.textContent = this.name;

            const deleteListButton = document.createElement("span")
            deleteListButton.classList.add("delete-list-btn");
            deleteListButton.innerHTML = DELETE_SVG;

            const editList = document.createElement("span");
            editList.classList.add("list-edit-btn");
            editList.innerHTML = EDIT_SVG;




            header.append(title, editList, deleteListButton);

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

            this.#listElement.addEventListener(CUSTOM_EVENTS.saveCard, this.handleCardSave.bind(this))
            this.#listElement.addEventListener("click", this.handleClick.bind(this))
            // listItemsContainer.addEventListener('custom-event', this.handleNewCard.bind(this))
        }

        handleClick(event) {
            if (event.target.closest(".delete-card-btn")) {
                // delete for card needs to handled
                // remove from ui
                const cardToDelete = event.target.closest(".card");
                console.log(cardToDelete.id);
                cardToDelete.parentElement.remove();
                // remove from app object
                this.cards = this.cards.filter(card => card.id !== cardToDelete.id);
                // update in local storage
                this.syncToStore();
            } else if (event.target.closest(".delete-list-btn")) {
                // logic to remove list
                console.log("need to remove list")
                const listElement = event.target.closest(".list");
                listElement.remove();

                EventBus.getInstance().dispatchEvent(new CustomEvent(CUSTOM_EVENTS.deleteList, {
                    detail: {
                        listId: listElement.id
                    }
                }))


            } else if (event.target.closest(".list-edit-btn")) {
                const newListName = prompt("Rename list", this.name);
                if (newListName) {
                    const title = event.target.closest(".list-edit-btn").previousElementSibling;
                    title.textContent = newListName;

                    this.name = newListName;
                    this.syncToStore();
                }

            } else if (event.target.closest(".edit-card-btn")) {
                console.log("edit card clicked")
                const cardToEdit = event.target.closest(".card");

                const customEvent = new CustomEvent(CUSTOM_EVENTS.openEditCardDialog, {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        listId: this.id,
                        card: this.cards.find(card => card.id === cardToEdit.id)
                    }
                })

                const cardDialog = document.querySelector("#new-card-dialog");
                cardDialog.dispatchEvent(customEvent);

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

        handleCardSave(event) {
            // Array.from(event.target.children).forEach(child => child.dispatchEvent(new CustomEvent('custom-event', { detail: { ...event.detail } })))
            if (event.detail.mode === "edit") {
                this.reRenderCard(event.detail)
            } else {
                const newCard = this.addCard(event.detail);
                this.renderCard(newCard)
            }
            this.syncToStore();
        }

        reRenderCard({ name, description, dueDate, id }) {
            let cardToUpdate = this.cards.find(card => card.id === id);

            cardToUpdate.name = name;
            cardToUpdate.description = description;
            cardToUpdate.dueDate = dueDate;

            const updatedCardElement = cardToUpdate.createCardElement();

            const existingCardParent = document.getElementById(cardToUpdate.id)?.parentElement;

            existingCardParent.replaceChildren(updatedCardElement);


        }

        addCard({ name, description, dueDate, id }) {
            let newCard = new Card(name, dueDate, description, id);
            this.cards.push(newCard);
            return newCard;
        }

        renderCard(card) {

            const newCardElement = card.createCardElement();
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
            this.registerListeners();

        }

        registerListeners() {
            EventBus.getInstance().addEventListener(CUSTOM_EVENTS.deleteList, this.removeListFromBoard.bind(this))
        }

        removeListFromBoard(event) {
            const { listId } = event.detail;
            this.lists = this.lists.filter(list => list.id !== listId);
            EventBus.getInstance().dispatchEvent(new CustomEvent(CUSTOM_EVENTS.saveToStorage));
        }

        render() {
            const boardsContainer = document.getElementById("boards-container");

            const boardItem = document.createElement("li");
            boardItem.id = this.id;
            boardItem.textContent = this.name;
            boardItem.classList.add("board");

            boardsContainer.append(boardItem);

        }



        renderAddListButton() {
            const section = document.createElement("section");
            section.classList.add("new-list-section")
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
                newList.render();
                // let app = store.get()
                // let index = app.boards.findIndex(board => board.id === this.id)
                // app.boards[index] = this;
                // store.save(app)
                EventBus.getInstance().dispatchEvent(new CustomEvent(CUSTOM_EVENTS.saveToStorage))

            }

        }
    }

    let app = TodoApp.getTodoApp();
    app.loadDefaultBoard();
    const addBoardButton = document.getElementById("btn-new-board");

    const listContainer = document.querySelector(".list-container");
    listContainer.addEventListener("dragstart", event => {
        console.log(event)
        event.target.closest(".card").classList.add("dragging");
        event.dataTransfer.setData("text/plain", event.target.id);
    })

    listContainer.addEventListener("dragover", event => {
        console.log(event)
        event.preventDefault();
        event.target.closest(".list")?.classList.add("dropable");

    })
    listContainer.addEventListener("dragleave", event => {
        console.log(event)
        event.preventDefault();
        event.target.closest(".list")?.classList.remove("dropable");

    })
    listContainer.addEventListener("drop", event => {
        event.preventDefault();
        const targetList = event.target.closest(".list");
        const cardId = event.dataTransfer.getData("text/plain");

        const cardElement = document.getElementById(cardId);
        const sourceList = cardElement.closest(".list");
        targetList.classList.remove("dropable")

        if (targetList.id !== sourceList.id) {
            cardElement.parentElement.remove();

            const sourceListObj = app.boards[app.selectedBoardIndex].lists.find(list => list.id === sourceList.id);
            const cardIndex = sourceListObj.cards.findIndex(card => card.id === cardId);
            let deletedCard = sourceListObj.cards.splice(cardIndex, 1);


            const targetListObj = app.boards[app.selectedBoardIndex].lists.find(list => list.id === targetList.id);
            const newCard = targetListObj.addCard(deletedCard[0]);
            targetListObj.renderCard(newCard);

            app.save();
        }


    })




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

    cardDialog.addEventListener(CUSTOM_EVENTS.openEditCardDialog, event => {
        const { target: dialog, detail } = event;

        dialog.classList.remove("hidden");
        let form = dialog.querySelector("form");

        const { name, id, dueDate, description } = detail.card;
        const cardTitle = form.querySelector("#card-title");
        cardTitle.value = name;

        const cardDescription = form.querySelector("#card-description");
        cardDescription.value = description;

        const cardDueDate = form.querySelector("#card-due-date");
        cardDueDate.value = dueDate;


        form.dataset.mode = "edit";
        form.dataset.cardId = id;

        form.dataset.listId = detail.listId;

        console.log(detail);



    })
    cardForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const name = formData.get("title");
        const description = formData.get("description");
        const dueDate = formData.get("due-date");
        const listId = document.getElementById(form.dataset.listId);

        const mode = form.dataset.mode;

        // const newCard = new Card(title, dueDate, description);
        // this.cards.push(newCard);
        // this.renderCard(newCard);

        const cardId = form.dataset.cardId;
        const cardEvent = new CustomEvent(CUSTOM_EVENTS.saveCard, mode === "edit" ? {
            detail: {
                name, description, dueDate, id: cardId, mode
            }
        } : {
            detail: {
                name, description, dueDate
            }
        })


        listId.dispatchEvent(cardEvent);

        form.dataset.listId = "";
        form.dataset.cardId = ""

        form.reset()


    })

    cardForm.addEventListener("reset", (event) => {
        cardDialog.classList.add("hidden");
    })





})