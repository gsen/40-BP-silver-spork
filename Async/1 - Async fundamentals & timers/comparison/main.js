let count = 0;
let timerCall = 0;
setInterval(() => {

    let start = Date.now();
    console.log("Start with interval", start);
    console.log("in progress")
    while (Date.now() - start < 3000) { };
    count += 10;// if this operation takes 2 seconds
    console.log("End with interval", Date.now())

}, 1000)

// setInterval overlaps 
// if there is an ongoing interval and the task inside it
// takes longer than the interval delay, the new interval would
// still start. The expected delay is not guranteed.
//     2sec
// |-----------| 

// |--task 1---|           overlapping
//     |---task 2---|

// |---1sec----|

// in case of settimeout if the callback fn task is
// still in progress it will not execute the next task
// untill the previous task is finished
// this will ensure the expected delay between two tasks

let timer;
function startTimer() {
    timer = setTimeout(() => {
        // some work
        let start = Date.now();
        console.log("Start with timeout", start);
        console.log("called recursively")
        while (Date.now() - start < 3000) { };
        console.log("End with timeout", Date.now())
        startTimer();
    }, 1000);
}

startTimer();

// ---task1---delay----task2----delay---next task

function stopTimer() {
    clearTimeout(timer);
}


