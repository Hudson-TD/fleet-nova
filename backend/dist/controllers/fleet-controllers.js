import { User } from "../models/User.js";
import { Vehicle } from "../models/Vehicle.js";
export async function getUserFleet(req, res) {
    const id = req.params.id;
    try {
        const user = await User.findById(id).populate("fleet");
        if (!user) {
            res.status(404).send({
                status: "Not Found",
                message: "No matches found for the provided fleet ID.",
            });
        }
        res.status(200).send(user.fleet);
    }
    catch (error) {
        res.status(500).send({
            status: "Error",
            message: "Something went wrong fetching fleet data.",
        });
    }
}
export async function addFleetAsset(req, res) {
    const id = req.params.id;
    const { make, model } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send({
                status: "Not Found",
                message: "No matches found for the provided fleet ID.",
            });
        }
        const newAsset = new Vehicle({
            make,
            model,
        });
        // Save the new asset data
        await newAsset.save();
        // Update user fleet with new asset
        user.fleet.push(newAsset);
        // Save user to persist addition
        await user.save();
        res.status(201).send({
            status: "Success",
            message: "Fleet asset added successfully.",
        });
    }
    catch (error) {
        res.status(500).send({
            status: "Error",
            message: "Something went wrong adding fleet asset.",
        });
    }
}
//# sourceMappingURL=fleet-controllers.js.map