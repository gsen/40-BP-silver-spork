document.addEventListener("DOMContentLoaded", function () {
    let counter1 = {
        count: 0,
        counterElement: null,
        incrementButton: null,
        decrementButton: null,
        initializeCounter(counterId, incrementId, decrementId) {
            this.counterElement = document.getElementById(counterId);
            this.incrementButton = document.getElementById(incrementId);
            this.decrementButton = document.getElementById(decrementId);

            this.registerEvents();
        },
        increment() {
            console.log(this);
            console.log("increment called");

            this.count++;
            this.renderCount();
        },

        decrement() {
            console.log("decrement called");

            this.count--;
            this.renderCount();
        },

        renderCount() {
            this.counterElement.textContent = this.count;
        },

        registerEvents() {
            console.log("register events called");

            // document.getElementById("increment").addEventListener("click", this.increment);
            this.incrementButton.addEventListener("click", () => {
                this.increment();
            });
            this.decrementButton.addEventListener("click", () => {
                this.decrement();
            });
        },
    };

    let counter2 = {
        count: 0,
        counterElement: null,
        incrementButton: null,
        decrementButton: null,
        initializeCounter(counterId, incrementId, decrementId) {
            this.counterElement = document.getElementById(counterId);
            this.incrementButton = document.getElementById(incrementId);
            this.decrementButton = document.getElementById(decrementId);

            this.registerEvents();
        },
        increment() {
            console.log(this);
            console.log("increment called");

            this.count++;
            this.renderCount();
        },

        decrement() {
            console.log("decrement called");

            this.count--;
            this.renderCount();
        },

        renderCount() {
            this.counterElement.textContent = this.count;
        },

        registerEvents() {
            console.log("register events called");

            // in this case this will be the element on which the click event is raised
            // document.getElementById("increment").addEventListener("click", this.increment);
            this.incrementButton.addEventListener("click", () => {
                // in case of arrow functions this is not passed implicitly
                // so here this will be the object counter object itself.
                this.increment();
            });
            this.decrementButton.addEventListener("click", () => {
                this.decrement();
            });
        },
    };

    counter1.initializeCounter("counterRef", "increment", "decrement");
    counter2.initializeCounter("counterRef2", "increment2", "decrement2");

});
