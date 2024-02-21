import { Router } from "express";
export const fleetRoutes = Router();
fleetRoutes.get("/", (req, res, next) => {
    res.json({ message: "You hit the fleet route." });
});
fleetRoutes.get("/:id", (req, res, next) => {
    res.json({ message: "You hit the user fleet route." });
});
//# sourceMappingURL=fleet-routes.js.map