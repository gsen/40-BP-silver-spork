import { exec } from "node:child_process";

exec("node -v", (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return
    }

    console.log(stdout);
})