import express from "express";
import { signupQueue } from "./email-queue.mjs";
const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {
    const user = req.body;
    console.log("request arrived", user)
    const job = await signupQueue.add(user);
    console.log("added user to the queue")
    console.log(job);
    res.send({ msg: "Processing. You will receive email shortly" })
})

app.listen(3000, () => {
    console.log("server started on port:3000");
})