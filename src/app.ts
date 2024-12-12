import express, { Express } from "express";
import apiRouter from "./routes/api.ts";

const app: Express = express();

app.use(express.json());
app.use(apiRouter);

export default app;
