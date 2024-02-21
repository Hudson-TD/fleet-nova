import mongoose from "mongoose";

const vehicleTypeEnum = [
  "Coupe",
  "Sedan",
  "Truck",
  "Motorcycle",
  "Van",
  "Bus",
  "SUV",
  "Covertible",
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
  exterior_color: {
    type: String,
  },
  vin: {
    type: String,
  },
  vehicle_type: {
    type: String,
    enum: vehicleTypeEnum,
  },
  purchase_mileage: {
    type: String,
  },
  maintenance_history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
