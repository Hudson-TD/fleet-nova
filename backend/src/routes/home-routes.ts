import { Router } from "express";

const homeRoutes = Router();

homeRoutes.get("/", (req, res) => {
  res.status(200).json({ page: "Home", status: "Not yet implemented :)" });
});

homeRoutes.get("/fleet", (req, res) => {
  res
    .status(200)
    .json({
      name: "Tyler",
      fleetCount: 2,
      makes: ["Acura", "Hyundai"],
      models: ["TL", "Elantra"],
    });
});

export default homeRoutes;
