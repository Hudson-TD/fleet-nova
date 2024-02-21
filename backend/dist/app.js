import express from "express";
import appRouter from "./routes/index.js";
import cors from "cors";
const app = express();
const CORS = cors();
// CORS to avoid dual PORT issues in dev
app.use(CORS);
// Middleware to parse JSON in the request body
app.use(express.json());
app.use("/", appRouter);
export default app;
//# sourceMappingURL=app.js.map