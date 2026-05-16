// const myFirstQueue = new Bull('sign-up-queue');
import { signupQueue } from "./email-queue.mjs";



function main() {
    signupQueue.process(async (job) => {
        console.log(job.data);
        const user = job.data;
        console.log(`processing user signup:`);
        console.log(`email sent to: ${user.email} `)
    });
}

main();