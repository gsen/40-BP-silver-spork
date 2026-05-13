import EventEmitter from "node:events";
import readline from "node:readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const emitter = new EventEmitter();

function onSubscribe(user) {
    console.log("user subscribed", user.username);

}

emitter.on("user:subscribed", onSubscribe)


// emitter.once("user:subscribed", onSubscribe) // runs once and will automatically remove the event listener

// emitter.off("user:subscribed", onSubscribe)


emitter.on("error", (err) => {
    console.log(err.message)
})



input.question("Do you want to subscribe(y/n)", (value) => {
    if (value.toLowerCase() === "y") {
        emitter.emit("user:subscribed", {
            username: "Gaurav",
            location: "India"
        })
    } else {
        console.log("user did not subscribe")
        throw new Error("User didnt subscribe")
    }

});


