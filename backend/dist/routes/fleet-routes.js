import { Router } from "express";
import { addFleetAsset, getUserFleet, } from "../controllers/fleet-controllers.js";
import { checkAuthToken } from "../middleware/authentication.js";
export const fleetRoutes = Router();
fleetRoutes.get("/assets", checkAuthToken, getUserFleet);
fleetRoutes.post("/assets/add", addFleetAsset);
//# sourceMappingURL=fleet-routes.js.map