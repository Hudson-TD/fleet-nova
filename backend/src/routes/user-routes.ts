import { Router } from "express";
import { createNewUserAccount, userAccountLogin } from "../controllers/user-controllers.js";

export const userRoutes = Router();

userRoutes.post("/signup", createNewUserAccount);
userRoutes.post("/login", userAccountLogin);
