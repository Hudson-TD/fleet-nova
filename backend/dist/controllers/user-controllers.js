import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function createNewUserAccount(req, res) {
    try {
        const { first_name, last_name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).send({
                status: "Conflict",
                message: "The provided email is already in use.",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id, username: newUser.first_name }, process.env.TOKEN_SECRET);
        return res.status(200).send({
            status: "Success",
            message: "Account creation successful.",
            token,
        });
    }
    catch (error) {
        return res.status(500).send({ error: error });
    }
}
export async function userAccountLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send({
                status: "Not Found",
                message: "Account not found. Please check your credentials and try again.",
            });
        }
        const validatedPassword = await bcrypt.compare(password, user.password);
        if (!validatedPassword) {
            return res.status(401).send({
                status: "Error",
                message: "Invalid credentials, please double check and try again.",
            });
        }
        const token = jwt.sign({ id: user._id, username: user.first_name }, process.env.TOKEN_SECRET);
        return res.status(200).send({
            status: "Success",
            message: "Login successful.",
            token,
        });
    }
    catch (error) {
        console.error("Error loging in user:", error);
        return res.status(401).send({
            status: "Unauthorized",
            message: "Incorrect password. Please check your credentials and try again.",
        });
    }
}
//# sourceMappingURL=user-controllers.js.map