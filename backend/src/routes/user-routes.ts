import { Router } from "express";
import { createNewUserAccount, userAccountLogin } from "../controllers/user-controllers.js";

export const userRoutes = Router();

userRoutes.get("/", (req, res) => {
    res.json({message: "You hit the user route."})
})

userRoutes.post("/signup", createNewUserAccount);
userRoutes.post("/login", userAccountLogin);
