import express from "express";
import cors from "cors";
import cepRouter from "routers/cep"
import type { Express } from "express";

const app: Express = express();
const host: string = process.env.HOST || "127.0.0.1";
const port: string = process.env.PORT || "8000";

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

app.use("/api/cep", cepRouter);

app.listen(port, () => {
    console.log(`${host}:${port}`);
})