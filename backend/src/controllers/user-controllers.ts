import { Request, Response } from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function createNewUserAccount(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).send({
        status: "Conflict",
        message: "Email provided is already associated with an account.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).send({
      status: "Success",
      message: "New user account created successfully.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send({
      status: "Error",
      error: {
        message: "Internal server error. Please try again later.",
      },
    });
  }
}

export async function userAccountLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({
        status: "Not Found",
        message:
          "Account not found. Please check your credentials and try again.",
      });
    }

    const validatedPassword = await bcrypt.compare(password, user.password);

    if (validatedPassword) {
      return res.status(201).send({
        status: "Success",
        message: "Credentials validated successfully.",
      });
    }
  } catch (error) {
    console.error("Error loging in user:", error);
    return res.status(401).send({
      status: "Unauthorized",
      message:
        "Incorrect password. Please check your credentials and try again.",
    });
  }
}
