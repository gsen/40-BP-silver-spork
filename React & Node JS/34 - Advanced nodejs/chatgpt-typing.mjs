const text = "Welcome to streaming";

const words = text.split(" ");

let index = 0;

const interval = setInterval(() => {

    if (index >= words.length) {
        clearInterval(interval);
        process.stdout.write("\n");
        return;
    }
    process.stdout.write(words[index] + " ");
    index++;
}, 300);