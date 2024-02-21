import { User } from "../models/User.js";
export async function createNewUserAccount(req, res) {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).send({
                status: "Conflict",
                message: "Email provided is already associated with an account.",
            });
        }
        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();
        return res.status(201).send({
            status: "Success",
            message: "New user account created successfully.",
        });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({
            status: "Error",
            error: {
                message: "Internal server error. Please try again later.",
            },
        });
    }
}
//# sourceMappingURL=user-controllers.js.map