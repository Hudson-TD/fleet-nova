import mongoose from "mongoose";
const accountTypeEnum = ["personal, business"];
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        enum: accountTypeEnum,
    },
    fleet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }],
});
export const User = mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map