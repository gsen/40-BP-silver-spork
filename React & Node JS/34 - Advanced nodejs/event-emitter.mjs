import EventEmitter from "node:events";
import readline from "node:readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const emitter = new EventEmitter();


emitter.on("user:subscribed", (user) => {
    console.log("user subscribed", user.username);
})



input.question("Do you want to subscribe(y/n)", (value) => {
    if (value.toLowerCase() === "y") {
        emitter.emit("user:subscribed", {
            username: "Gaurav",
            location: "India"
        })
    } else {
        console.log("user did not subscribe")
    }

});


