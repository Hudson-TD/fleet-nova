import { Router } from "express";
import { fleetRoutes } from "./fleet-routes.js";
import { userRoutes } from "./user-routes.js";

const appRouter = Router();

appRouter.use("/fleet", fleetRoutes);
appRouter.use("/user", userRoutes);

export default appRouter;
