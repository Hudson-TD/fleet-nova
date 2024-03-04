import mongoose from "mongoose";
const assetTypeEnum = [
    "Coupe",
    "Sedan",
    "Truck",
    "Motorcycle",
    "Van",
    "Bus",
    "SUV",
    "Covertible",
    "Other",
];
const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    model_year: {
        type: String,
        required: true,
    },
    exterior_color: {
        type: String,
    },
    interior_color: {
        type: String,
    },
    vin: {
        type: String,
    },
    asset_type: {
        type: String,
        required: true,
        enum: assetTypeEnum,
    },
    purchase_mileage: {
        type: Number,
    },
    maintenance_history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MaintenanceItem",
        },
    ],
    archived: {
        type: Boolean,
        default: false,
    },
});
export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
//# sourceMappingURL=Vehicle.js.map