import { Router } from "express";
export const homeRoutes = Router();
homeRoutes.get("/", (req, res) => {
    console.log(req);
    res.status(200).send("Hello world!");
});
//# sourceMappingURL=home-routes.js.map