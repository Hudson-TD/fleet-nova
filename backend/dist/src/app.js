import express from "express";
import appRouter from "../routes/index.js";
const app = express();
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map