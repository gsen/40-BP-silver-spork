
import { parentPort } from "worker_threads";

function heavyTask() {
    let total = 0;
    for (let i = 0; i < 10_00_000_000_0; i++) {
        total += i;
    }
    console.log("heave task finished");
    return total;
}

const result = heavyTask();

parentPort.postMessage(result);

