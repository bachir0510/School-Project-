import express from "express";
import cors from "cors";
const app = express();

import authRouter from "./routers/auth.routes";
import studentsRouter from "./routers/students.routes";

app.set("Port", 8080);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/auth", authRouter);
app.use("/api/students", studentsRouter);

export default app;
