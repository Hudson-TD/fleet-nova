import { Router } from "express";
import homeRoutes from "./home-routes.js";
import { fleetRoutes } from "./fleet-routes.js";

const appRouter = Router();

appRouter.use("/", homeRoutes);
appRouter.use("/fleet", fleetRoutes);

export default appRouter;
