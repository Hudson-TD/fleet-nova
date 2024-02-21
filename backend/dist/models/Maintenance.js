import mongoose from "mongoose";
const workOrderEnum = ["Repair", "Recall", "Maintenance", "Modification"];
const maintenanceSchema = new mongoose.Schema({
    work_order: {
        type: String,
        enum: workOrderEnum,
    },
    cost: {
        type: Number,
    },
    work_date: {
        type: Date,
    },
    work_provider: {
        type: String,
    },
    note: {
        type: String,
    },
});
//# sourceMappingURL=Maintenance.js.map