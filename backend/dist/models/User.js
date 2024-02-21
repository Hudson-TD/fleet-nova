import mongoose from "mongoose";
const accountTypeEnum = ["personal, business"];
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        enum: accountTypeEnum,
    },
    fleet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }],
});
export const User = new mongoose.Model("User", userSchema);
//# sourceMappingURL=User.js.map