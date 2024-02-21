import { Router } from "express";
import { addFleetAsset, getUserFleet } from "../controllers/fleet-controllers.js";
export const fleetRoutes = Router();
fleetRoutes.get("/:id", getUserFleet);
fleetRoutes.post("/:id/add", addFleetAsset);
//# sourceMappingURL=fleet-routes.js.map