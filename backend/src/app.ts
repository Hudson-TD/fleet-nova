import express from "express";
import appRouter from "./routes/index.js";
import cors from "cors";

const app = express();
const CORS = cors();

app.use(CORS);
app.use("/api/v1", appRouter);

export default app;
