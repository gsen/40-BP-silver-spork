document.addEventListener("DOMContentLoaded", function () {

    function Counter(counterId, incrementId, decrementId) {
        this.count = 0;
        this.counterElement = document.getElementById(counterId);;
        this.incrementButton = document.getElementById(incrementId);
        this.decrementButton = document.getElementById(decrementId);

        // this.toString = function () {
        //     return this.count;
        // }
        // this.increment = function () {
        //     console.log(this);
        //     console.log("increment called");

        //     this.count++;
        //     this.renderCount();
        // }

        // this.decrement = function () {
        //     console.log("decrement called");

        //     this.count--;
        //     this.renderCount();
        // }

        // this.renderCount = function () {
        //     this.counterElement.textContent = this.count;
        // }

        // this.registerEvents = function () {
        //     console.log("register events called");

        //     // document.getElementById("increment").addEventListener("click", this.increment);
        //     this.incrementButton.addEventListener("click", () => {
        //         this.increment();
        //     });
        //     this.decrementButton.addEventListener("click", () => {
        //         this.decrement();
        //     });
        // }

    }

    // What happens when we use the new keyword

    // 1. creates a new empty object {}
    // 2. sets "this" to that new object
    // 3. Links the object to the contructor's prototype
    // 4. returns the new object automatically

    Counter.prototype.increment = function () {
        console.log(this);
        console.log("increment called");
        this.count++;
        this.renderCount();
    }

    Counter.prototype.decrement = function () {
        console.log("decrement called");

        this.count--;
        this.renderCount();
    }

    Counter.prototype.renderCount = function () {
        this.counterElement.textContent = this.count;
    }

    Counter.prototype.registerEvents = function () {
        console.log("register events called");

        // document.getElementById("increment").addEventListener("click", this.increment);
        this.incrementButton.addEventListener("click", () => {
            this.increment();
        });
        this.decrementButton.addEventListener("click", () => {
            this.decrement();
        });
    }



    let counter1 = new Counter("counterRef", "increment", "decrement");

    console.log(counter1);


    //Counter.prototype.list = []

    // counter1.list.push(["abc"])
    // this will update the list array in both the instances 
    // counter 1 as well as counter2

    // if you do not want to share something between multiple instances of the
    // same type do not define it on the prototype

    counter1.registerEvents();


    // counter1.initializeCounter("counterRef", "increment", "decrement");
    let counter2 = new Counter("counterRef2", "increment2", "decrement2");
    console.log(counter2);



    counter2.registerEvents();

    Counter.prototype.someNewMethod = function () {
        console.log("some new method is added to prototype")
    }




    // diff b/w regular func & contructor func
    // 1. regular - perform some action  | contructor - create object
    // 2. this is generally not used.    | this is use
    // 3. functionName()                 | new ConstructorFn()
    // 4. explict return statement is used| automatically the object is returned


    console.log(counter1.toString())
    // hasOwn will let us know if a property is defined on the object
    // if it is defined on the object only then it will return true
    // if it is available on the prototype or prototype chain then it
    // will return false
    console.log(Object.hasOwn(counter1, "toString"))

    // console.log(counter1.abcFunc()) - here abc func is not available on the object
    // as well it's prototype chain - so error will be thrown


    // whenever we access any property or method
    // it is first searched in its object, if not present 
    // then it will try to find it in the prototype chain
    // if it's no where to be found then exception will occur.

});


// function is a special object in js
// 2 properties - name , code 


// function abc() {
//     console.log("does something")
// }