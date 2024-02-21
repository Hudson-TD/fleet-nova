import express from "express";
import appRouter from "./routes/index.js";
import cors from "cors";
const app = express();
const CORS = cors();
app.use(CORS);
app.use("/", appRouter);
export default app;
//# sourceMappingURL=app.js.map