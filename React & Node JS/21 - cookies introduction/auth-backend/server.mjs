import express from "express";
import { connect, disconnect } from "./db.mjs";
import chalk from "chalk";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.mjs";
import userRouter from "./routes/user.mjs";
const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use('/api/user', userRouter);

const server = app.listen(process.env.PORT, async () => {
    console.log(chalk.greenBright(`Server is running on port ${process.env.PORT}`));
    await connect(process.env.CONNECTION_STRING);
})

process.on("SIGINT", async () => {
    console.log(chalk.yellowBright("Received SIGINT. Shutting down gracefully..."));
    await disconnect();
    await server.close();
    process.exit(0);
})

process.on("uncaughtException", async (err) => {
    console.error(chalk.redBright("Uncaught Exception:", err));
    await disconnect();
    process.exit(1);
})

process.on("unhandledRejection", async (reason, promise) => {
    console.error(chalk.redBright("Unhandled Rejection at:", promise, "reason:", reason));
    await disconnect();
    process.exit(1);
})
