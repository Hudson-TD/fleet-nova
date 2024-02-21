import { Router } from "express";
const homeRoutes = Router();
homeRoutes.get("/", (req, res) => {
    res.status(200).json({ page: "Home", status: "Not yet implemented :)" });
});
homeRoutes.get("/about", (req, res) => {
    res.status(200).json({ page: "About", status: "Not yet implemented :)" });
});
export default homeRoutes;
//# sourceMappingURL=home-routes.js.map