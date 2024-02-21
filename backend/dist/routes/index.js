import { Router } from "express";
import homeRoutes from "./home-routes.js";
const appRouter = Router();
appRouter.use("/", homeRoutes);
export default appRouter;
//# sourceMappingURL=index.js.map